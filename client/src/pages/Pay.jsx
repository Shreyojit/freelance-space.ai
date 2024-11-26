import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import newRequest from "../utils/newRequest";

// Load Stripe with your publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Pay = () => {
  const { id } = useParams(); // Access the gig ID from the URL
  const [order, setOrder] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch the order and clientSecret from the backend
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const res = await newRequest.post(`/orders/create-payment-intent/${id}`);
        setOrder(res.data.order);
        setClientSecret(res.data.clientSecret);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchOrderData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return; // Check if stripe and elements are loaded

    const card = elements.getElement(CardElement); // Get card input from Stripe elements
    if (!card) return;

    // Collect billing details from the form
    const billingDetails = {
      name: name,
      address: {
        line1: address,
        city: city,
        state: state,
        postal_code: postalCode,
        country: "IN", // Set to India
      },
    };

    // Confirm the payment
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: billingDetails, // Include the billing details from form
      },
    });

    if (error) {
      console.error("Payment failed", error);
      alert(error.message);
    } else {
      // Handle the paymentIntent status using switch
      switch (paymentIntent.status) {
        case "succeeded":
          alert("Payment succeeded!");
          navigate("/success"); // Navigate to the success page upon successful payment
          break;
        case "requires_payment_method":
          alert("Payment failed! Please try again.");
          break;
        case "requires_action":
          alert("Payment requires additional action. Please follow the instructions.");
          break;
        case "canceled":
          alert("Payment was canceled. Please try again.");
          break;
        default:
          alert("Unexpected status: " + paymentIntent.status);
          break;
      }
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Pay for Gig: {order.title}</h2>
      <p className="text-lg mb-6">Price: ₹{order.price}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Billing Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Billing Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Postal Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Postal Code</label>
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Card Details */}
        <div className="my-4">
          <label className="block text-sm font-medium text-gray-700">Card Details</label>
          <CardElement />
        </div>

        <button
          type="submit"
          disabled={!stripe}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

const PayPage = (props) => (
  <Elements stripe={stripePromise}>
    <Pay {...props} />
  </Elements>
);

export default PayPage;
