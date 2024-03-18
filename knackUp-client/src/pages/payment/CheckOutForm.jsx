import { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import useCart from "../../hook/useCart";
import { toast } from "react-toastify";

const CheckOutForm = () => {
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart, ,refetch] = useCart();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const [transactionId, setTransaction] = useState("");
  const navigate = useNavigate();
  const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);
  useEffect(()=>{ 
    if(totalPrice > 0){
      axiosSecure.post("/create-payment-intent", {price: totalPrice})
      .then(res=>{
          setClientSecret(res.data.clientSecret);
      })
    }
  },[axiosSecure,totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message)
    } else {
      setError("")
    }

    //confirm payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,
      {
        payment_method: {
          card: card,
         billing_details: {
          email: user?.email || "anonymous",
          name : user?.displayName || "anonymous"
         }
        }
      }
      )

      if(confirmError){
        return
      }
      else{
        if(paymentIntent.status == "succeeded"){
          setTransaction(paymentIntent.id);

          // save payment details in database
          const payment = {
            email: user?.email,
            price: totalPrice,
            transactionId: paymentIntent.id,
            date: new Date(),
            cartIds: cart.map(course => course._id),
            courseIds: cart.map(course =>course.courseId),
            status: "pending" 
          }
          const res = await axiosSecure.post("/payments", payment);
          refetch();
          if(res?.data?.paymentResult?.insertedId){
            toast.success("Payment Successful");
          }
        }
      }
  };

  return (
    <div className="text-white">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#FFF",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-primary mt-5 w-full "
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-400 mt-2">{error}</p>
        {transactionId && <p className="text-green-400">{transactionId}</p>}
      </form>
    </div>
  );
};

export default CheckOutForm;
