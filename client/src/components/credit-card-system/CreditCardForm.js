import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
function CreditCardForm({ onSubmit, apiError }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="ui form">
      <h2 className="ui  header">Add </h2>
      <div className="four wide field">
        <Form.Field>
          <label>Name1</label>
          <input
            placeholder="Name"
            type="text"
            {...register("name", { required: true })}
          />
        </Form.Field>
        {errors.name && (
          <p className="text-error">Please check the First Name</p>
        )}
      </div>
      <div className="four wide field">
        <Form.Field>
          <label>Card Number</label>
          <input
            placeholder="Card Number"
            type="text"
            {...register("cardNumber", {
              required: true,
              maxLength: 19,
              pattern: /^[0-9]+$/,
            })}
          />
        </Form.Field>
        {errors.cardNumber && (
          <p className="text-error">Please check the Card Number</p>
        )}
      </div>
      <div className="four wide field">
        <Form.Field>
          <label>Limit</label>
          <input
            placeholder="Limit"
            type="text"
            {...register("limit", {
              required: true,
              maxLength: 10,
              pattern: /^[0-9]+$/,
            })}
          />
        </Form.Field>
        {errors.limit && <p className="text-error">Please check the Limit</p>}
      </div>

      <Button type="submit">Add</Button>
      {apiError && <p className="text-error">{ apiError.message}</p>}
    </Form>
  );
}

export default CreditCardForm;
