import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import Container from "../../components/shared/Container";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK); 

const Payment = () => {
    
    return (
        <Container>
              <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </Container>
    );
};

export default Payment;