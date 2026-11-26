import test from "node:test";
import assert from "node:assert/strict";
import { PORTFOLIO_PROJECTS, computeCardTilt } from "./projectsMeta.js";

test("PORTFOLIO_PROJECTS contains exactly 5 curated projects (1 kept + 4 new)", () => {
  assert.equal(PORTFOLIO_PROJECTS.length, 5);

  const urls = PORTFOLIO_PROJECTS.map((p) => p.liveUrl);
  assert.ok(urls.includes("https://mis-for-school.vercel.app/"));
  assert.ok(urls.includes("https://mdcat.zenvex.workers.dev/"));
  assert.ok(urls.includes("https://aureliagrandhotel.vercel.app/"));
  assert.ok(urls.includes("https://novarobots.vercel.app/"));
  assert.ok(urls.includes("https://zenvexai.zenvex.workers.dev/"));

  // Removed 2 old projects should not be present
  assert.ok(!urls.includes("https://e-commerece-shop.vercel.app/"));
  assert.ok(!urls.includes("https://intelligence-hub-drab.vercel.app/"));
});

test("every project has required metadata and wallpaperKey", () => {
  for (const project of PORTFOLIO_PROJECTS) {
    assert.ok(project.id);
    assert.ok(project.number);
    assert.ok(project.titleHighlight);
    assert.ok(project.wallpaperKey);
    assert.ok(project.description.length > 20);
    assert.ok(Array.isArray(project.tech) && project.tech.length >= 3);
    assert.match(project.liveUrl, /^https:\/\//);
  }
});

test("computeCardTilt centers at 0deg and clamps corners cleanly", () => {
  assert.deepEqual(computeCardTilt(0.5, 0.5, 6), { rotateX: 0, rotateY: 0 });
  assert.deepEqual(computeCardTilt(1, 0, 6), { rotateX: 6, rotateY: 6 });
  assert.deepEqual(computeCardTilt(-0.5, 2, 6), { rotateX: -6, rotateY: -6 });
});
