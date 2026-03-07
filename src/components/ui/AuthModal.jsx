import { useNavigate } from "react-router-dom";

export default function AuthModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const goToLogin = () => {
    navigate("/login");
    onClose();
  };

  const goToSignup = () => {
    navigate("/signup");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Login Required</h2>

        <p>
          You must be logged in to bookmark movies. Login to your account or
          create one if you are new.
        </p>

        <div className="modal-actions">
          <button className="login-btn" onClick={goToLogin}>
            Login
          </button>

          <button className="signup-btn" onClick={goToSignup}>
            Create Account
          </button>
        </div>

        <button className="close-btn hover:text-red-primary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
