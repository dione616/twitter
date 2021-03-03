import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store";
import { createTwitt } from "../../store/twitt";
import * as Yup from "yup";
import ValidationError from "../generic/error";
import { SubmitButton } from "../button/submit/styles";
import { Wrapper } from "../generic/wrapper/styles";

const mapState = (state: RootState) => {
  return {
    twitts: state.twittReducer.twitts,
  };
};

const connector = connect(mapState, { createTwitt });
type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {}

const AddTwitt: React.FC<Props> = ({ twitts, createTwitt }) => {
  console.log("TWITTS:", twitts);
  const [state] = useState({ text: "" });

  const sendTwitt = (text: string) => {
    createTwitt(text);
  };
  return (
    <Wrapper>
      <h2>Post new Twitt</h2>

      <Formik
        initialValues={state}
        validationSchema={Yup.object({
          text: Yup.string()
            .min(1, "Must be at least 3 chars")
            .max(2000, "Max 2000 chars")
            .required("Required"),
        })}
        onSubmit={(values) => {
          sendTwitt(values.text);
        }}
      >
        {({ errors }) => (
          <Form style={{ width: "100%", zIndex: 2 }}>
            <Field
              placeholder='Type your twitt'
              className='input-field'
              name='text'
            />
            {errors.text ? <ValidationError text={errors.text} /> : null}

            <SubmitButton disabled={errors.text ? true : false} type='submit'>
              Submit
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default connector(AddTwitt);
