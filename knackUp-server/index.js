const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const verifyToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "unauthorized access" });
  }

  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@jafardipu.hwlq4pv.mongodb.net/?retryWrites=true&w=majority&appName=jafardipu`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const coursesCollection = client.db("Knack").collection("courses");
    const feedbackCollection = client.db("Knack").collection("review");
    const userCollection = client.db("Knack").collection("user");
    const teacherReqCollection = client.db("Knack").collection("teacherReq");

    // middleware

    const verifyAdmin = async (req, res, next) => {
      const email = req?.decoded?.email;
      const query = { email: email };
      const user = await userCollection.findOne(query);
      const isAdmin = user?.role === "admin";
      if (!isAdmin) {
        return res.status(403).send({ message: "forbidden" });
      }
      next();
    };

    //jwt related apis
    app.post("/jwt", async (req, res) => {
      try {
        const user = req?.body;
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: "1h",
        });

        res.send({ token });
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    // courses related apis
    app.get("/classes", async (req, res) => {
      const search = req?.query?.search;
      const query = {
        title: {$regex: search, $options: "i"}
      }
      const result = await coursesCollection.find(query).toArray();
      res.send(result);
    });

    //feedback related apis
    app.get("/feedbacks", async (req, res) => {
      const result = await feedbackCollection.find().toArray();
      res.send(result);
    });

    //user related apis
    app.get("/users", verifyToken, verifyAdmin, async (req, res) => {
      try {
        const search = req?.query?.search;
        const query = {
          email: {$regex: search, $options: "i"}
        }
        const result = await userCollection.find(query).toArray();
        res.send(result);
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    app.post("/users", async (req, res) => {
      try {
        const user = req.body;
        const query = { email: user.email };
        const existingUser = await userCollection.findOne(query);
        if (existingUser) {
          return res.send({ message: "user already exist", insertedId: null });
        }
        const result = await userCollection.insertOne(user);
        res.send(result);
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    // admin related apis
    app.get("/users/admin/:email", verifyToken, async (req, res) => {
      try {
        const email = req.params.email;
        if (email !== req.decoded.email) {
          return res.status(403).send({ message: "forbidden" });
        }

        const query = { email: email };
        const user = await userCollection.findOne(query);
        let admin = false;
        if (user) {
          admin = user?.role === "admin";
        }
        res.send({ admin });
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    app.put("/users/admin/:email", async (req, res) => {
      try {
        const email = req.params.email;
        const query = { email: email };
        const options = { upsert: true };
        const updateDoc = {
          $set: {
            role: "admin",
          },
        };
        const result = await userCollection.updateOne(query, updateDoc, options);
        res.send(result);
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    // teacher related apis

    app.get("/users/TeacherReq", verifyToken, async(req, res)=>{
      const result = await teacherReqCollection.find().toArray();
      res.send(result);
    })

    app.post("/users/teacherReq", verifyToken, async(req, res)=>{
      try{
      const reqData = req?.body;
      const result = await teacherReqCollection.insertOne(reqData);
      res.send(result);
      }
      catch{err=>{
        res.send(err);
      }}
    });

    app.put("/users/teacherReq/:email", verifyToken, verifyAdmin, async(req, res)=>{
      try{
      const email = req?.params?.email;
      const query = {email: email};
      const options = { upsert: true };
      const updateRole = {
        $set: {
          role: "teacher",
        },
      };

      const userUpdate = await userCollection.updateOne(query, updateRole, options);
      
      const updateReq = {
        $set: {
          status: "accepted"
        }
      }

      const reqUpdate = await teacherReqCollection.updateOne(query, updateReq, options);
      res.send({userUpdate, reqUpdate});
      
      }
      catch{err=>{
        res.send(err);
      }}
    });

    app.put("/users/teacherReq/reject/:email", verifyToken, verifyAdmin, async(req, res)=>{
      try{
        const email = req?.params?.email;
        const query = {email: email};
        const options = { upsert: true };
        const updateReq = {
          $set: {
            status: "rejected"
          },
        };

        const result = await teacherReqCollection.updateOne(query, updateReq, options);
        res.send(result);

      }
      catch{err=>{
        res.send(err)
      }}
    })

   
    app.get("/users/teacher/:email", verifyToken, async (req, res) => {
      try {
        const email = req.params.email;
        if (email !== req.decoded.email) {
          return res.status(403).send({ message: "forbidden" });
        }

        const query = { email: email };
        const user = await userCollection.findOne(query);
        let teacher = false;
        if (user) {
          teacher = user?.role === "teacher";
        }
        res.send({ teacher });
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    app.get("/users/student/:email", verifyToken, async (req, res) => {
      try {
        const email = req.params.email;
        if (email !== req.decoded.email) {
          return res.status(403).send({ message: "forbidden" });
        }

        const query = { email: email };
        const user = await userCollection.findOne(query);
        let student = false;
        if (user) {
          student = user?.role === "student";
        }
        res.send({ student });
      } catch {
        (err) => {
          res.send(err);
        };
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Knack server is running");
});

app.listen(port, () => {
  console.log("Knack server is on port 5000");
});
