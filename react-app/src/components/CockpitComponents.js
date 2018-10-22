import React from "react";
import {
  Heading,
  Text,
  Divider,
  CustomImage,
  BigHero,
  PageBanner,
  SectionDivider,
  LeafletMap,
  Grid,
  BlogPosts,
  PageBannerMedia,
  CodeBlock,
  Form,
  Video,
  SubPages,
} from "./cockpit";

const defaultComponents = {
  heading: Heading,
  text: Text,
  divider: Divider,
  customimage: CustomImage,
  bighero: BigHero,
  pagebanner: PageBanner,
  sectiondivider: SectionDivider,
  leafletmap: LeafletMap,
  grid: Grid,
  blogposts: BlogPosts,
  pagebannermedia: PageBannerMedia,
  codeblock: CodeBlock,
  form: Form,
  video: Video,
  subpages: SubPages,
};

export default ({ components }) => (
  <div className="page--components">
    {components.map((component_parsed, idx) => {
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
