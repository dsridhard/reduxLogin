import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/usersSlice';
import '../assets/css/Login.css'
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Initialize the hook

  const onSubmit = (data) => {
    // Handle form submission logic
    console.log(data);
    const username = data.username;
    const role = data.role
    const jwt = data.jwt
    const round = data.round
    const user = {
      username: username,
      jwtToken: jwt,
      round: round,
      role: role,
    };
    dispatch(setUser(user));
    navigate("/profile")

  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
      }}
    >
      <TextField
        fullWidth
        label="username"
        name="username"
        id="username"
        {...register("username", { required: true })}
        margin="normal"
        variant="outlined"
        error={!!errors.username}
        helperText={
          errors.username?.type === "required" && "Username Id is required"
        }
      />
      <TextField
        fullWidth
        label="Role"
        name="role"
        id="role"
        {...register("role", { required: true })}
        margin="normal"
        variant="outlined"
        error={!!errors.role}
        helperText={
          errors.role?.type === "required" && "Role Id is required"
        }
      />
      <TextField
        fullWidth
        label="JWT"
        name="jwt"
        id="jwt"
        {...register("jwt", { required: true })}
        margin="normal"
        variant="outlined"
        error={!!errors.jwt}
        helperText={
          errors.jwt?.type === "required" && "JWT Id is required"
        }
      />
      <TextField
        fullWidth
        label="Round"
        name="round"
        {...register("round", { required: true })}
        margin="normal"
        variant="outlined"
        error={!!errors.round}
        helperText={
          errors.round?.type === "required" && "Round is required"
        }
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Login;
