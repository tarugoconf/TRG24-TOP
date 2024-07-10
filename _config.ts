import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import basePath from "lume/plugins/base_path.ts";
import icons from "https://deno.land/x/lume_icon_plugins@v0.1.2/phosphor.ts";
import { alert } from "npm:@mdit/plugin-alert@0.12.0";
import favicon from "lume/plugins/favicon.ts";
import metas from "lume/plugins/metas.ts";
import filterPages from "lume/plugins/filter_pages.ts";

const site = lume({
  location: new URL("https://trgcon.com"),
}, {
  markdown: {
    plugins: [alert],
  },
});

site.use(date());
site.copy("fonts");
site.copy("files");
site.copy("scripts");
site.use(lightningcss());
site.use(basePath());
site.use(metas());
site.use(icons({
  name: "icon",
  defaultType: "duotone",
}));
site.use(favicon({
  input: "files/favicon.svg",
}));
site.use(filterPages({
  fn: (page) =>
    !page.data.only_state || (page.data.only_state === page.data.state),
}));

site.remoteFile(
  "_includes/styles/reset.css",
  "https://cdn.jsdelivr.net/npm/modern-normalize@2.0.0/modern-normalize.css",
);

export default site;
