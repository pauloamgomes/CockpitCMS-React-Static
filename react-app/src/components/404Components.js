import React from "react";
import {
  Heading,
  Text,
  Divider,
  CustomImage,
  PageBanner,
  Grid,
} from "./cockpit";

const defaultComponents = {
  heading: Heading,
  text: Text,
  divider: Divider,
  customimage: CustomImage,
  pagebanner: PageBanner,
  grid: Grid,
};

export default ({ components }) => (
  <div className="page--components">
    {components &&
      components.map((component_parsed, idx) => {
        const name = component_parsed.component.toLowerCase();
        const settings = component_parsed.settings;
        const columns = component_parsed.columns || [];

        if (defaultComponents[name] === undefined) {
          return null;
        }

        const Component = defaultComponents[name];

        return (
          <Component
            name={name}
            {...settings}
            columns={columns}
            key={`component-${idx}`}
          />
        );
      })}
  </div>
);
