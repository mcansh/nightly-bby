import { Container } from "~/container";
import { CssModuleTest } from "~/css-module-test";
import { gradientText } from "~/heading.css";

export default function Index() {
  return (
    <Container>
      <h1 className={gradientText}>Welcome to Remix</h1>
      <CssModuleTest />
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </Container>
  );
}
