import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordion";
import { Rating } from "./components/Rating";

function App(props: any) {
  // делает что-то полезное
  // обязана вернуть JSX

  return (
    <div>
      <PageTitle title="This is APP Component" />
      <PageTitle title="My friends" />
      {/* Article 1
      <Rating value={3} /> */}
      <Accordion titleValue="Menu" collapsed={true} />
      <Accordion titleValue="Page" collapsed={false} />

      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  console.log("PageTitle rendering");
  return <h1>{props.title}</h1>;
}

export default App;
