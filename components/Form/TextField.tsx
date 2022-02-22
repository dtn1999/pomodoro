import { NextPage } from "next";
import { Input } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/components/TextField.module.css"

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
<p></p>;
import { Formik } from "formik";

interface Props {
  className: string;
}

const TextField: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Input placeholder="large size" size="lg" />
    </div>
  );
};

export default TextField;
