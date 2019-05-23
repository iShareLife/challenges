import React from "react";
import { storiesOf } from "@storybook/react";
import { Card, ViewsCount, Clock, UpVote, DownVote } from "components";
import centered from "@storybook/addon-centered/react";
import imageFile from "../assets/img1.png";

storiesOf("Cards", module)
  .addDecorator(centered)
  .add("Card basic", () => (
    <Card img={imageFile} title="Nanotecnologia Aplicada a Implantodontia">
      <div
        style={{
          display: "flex",
          margin: "20px 5px 0px 5px",
          justifyContent: "space-between"
        }}
      >
        <ViewsCount count="1.280" />
        <Clock time="1h 19min" />
        <UpVote count="225" />
        <DownVote count="12" />
      </div>
    </Card>
  ));
