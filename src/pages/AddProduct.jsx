import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Row, FormContainer } from "../styles/Form";
import { toast } from "react-hot-toast";
import styled from "styled-components";

const schema = yup.object().shape({
  title: yup
    .string()
    .min(4, "Title must be at least 4 characters")
    .required("Title is required"), // Update the error message
  content: yup
    .string()
    .min(8, "Content must be at least 8 characters")
    .max(200, "Content must be at most 40 characters")
    .required("Content is required"), // Update the error message
  price: yup
    .number()
    .min(1, "Price must be at least 1")
    .max(100000, "Price must be at most 100000")
    .required("Price is required"), // Update the error message
});

function AddProduct() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/admin/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(data),
      });
      const product = await response.json();
      navigate("/admin-products");
      toast.success("Product added successfully");
      console.log(product);
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)} size="4rem auto">
          <h1>Add Product</h1>
          <Row>
            <label>Title</label>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <input type="text" placeholder="Title" {...field} />
              )}
            />
            {errors.title && <p>{errors.title.message}</p>}{" "}
          </Row>
          <Row>
            <label>Price</label>
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <input type="number" placeholder="price" {...field} />
              )}
            />
            {errors.price && <p>{errors.price.message}</p>}{" "}
          </Row>
          <Row>
            <label>Content</label>
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <textarea
                  type="text"
                  placeholder="Content"
                  maxLength={200}
                  {...field}
                />
              )}
            />
            {errors.content && <p>{errors.content.message}</p>}{" "}
          </Row>

          <button type="submit">Add Product</button>
        </FormContainer>
      </Container>
    </>
  );
}

export default AddProduct;

const Container = styled.div`
  background-color: var(--color-grey-0);
`;
