import { Button, TextField } from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const FormLogin = () => {
  const schema = yup.object().shape({
    user: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField
          label="Usuário/Email"
          error={!!errors.user}
          helperText={errors.user?.message}
          {...register("user")}
        />
        <TextField
          label="Digite sua senha"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button type="submit" color="primary" variant="contained">
          Entrar
        </Button>
      </form>
    </>
  );
};

export default FormLogin;
