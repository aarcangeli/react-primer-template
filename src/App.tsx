import React from "react";
import { Avatar, Box, Header, PageLayout, StyledOcticon, useTheme } from "@primer/react";
import { MarkGithubIcon } from "@primer/octicons-react";

export default function App() {
  const { setColorMode, colorMode, colorScheme } = useTheme();

  return (
    <>
      <Header>
        <Header.Item>
          <Header.Link href="#" sx={{ fontSize: 2 }}>
            <StyledOcticon icon={MarkGithubIcon} size={32} sx={{ mr: 2 }} />
            <span>GitHub</span>
          </Header.Link>
        </Header.Item>
        <Header.Item full>Menu</Header.Item>
        <Header.Item sx={{ mr: 0 }}>
          <Avatar src="https://github.com/octocat.png" size={20} square alt="@octocat" />
        </Header.Item>
      </Header>

      <PageLayout>
        <PageLayout.Content>
          <Box borderColor="border.default" borderWidth={1} borderStyle="solid" p={3} borderRadius={1}>
            Hello React!
            <button onClick={() => setColorMode(colorScheme === "dark" ? "light" : "dark")}>Toggle theme</button>
            <br />
            Color mode: {colorMode}
            <br />
            Color scheme: {colorScheme}
          </Box>

          {/* Force the scrollbar to test the theme */}
          <div style={{ height: "2000px" }} />
        </PageLayout.Content>
      </PageLayout>
    </>
  );
}
