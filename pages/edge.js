import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getContext } from "../context";

export const getServerSideProps = ({ req }) => {
  return { props: { mycountry: getContext(req, "mycountry") } };
};

export default function Page(props) {
  console.log(props)
  return JSON.stringify(props);
}

export const config = {
  runtime: "experimental-edge",
};
