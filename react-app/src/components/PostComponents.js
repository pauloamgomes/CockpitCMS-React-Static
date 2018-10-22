import React from "react";
import {
  Heading,
  Text,
  Divider,
  CustomImage,
  SectionDivider,
  LeafletMap,
  Grid,
  CodeBlock,
  Form,
  Video,
} from "./cockpit";

const defaultComponents = {
  heading: Heading,
  text: Text,
  divider: Divider,
  customimage: CustomImage,
  sectiondivider: SectionDivider,
  leafletmap: LeafletMap,
  grid: Grid,
  codeblock: CodeBlock,
  form: Form,
  video: Video,
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
