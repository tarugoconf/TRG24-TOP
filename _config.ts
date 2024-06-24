import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import basePath from "lume/plugins/base_path.ts";
import icons from "https://deno.land/x/lume_icon_plugins@v0.1.0/phosphor.ts";

const site = lume();

site.use(date());
site.copy("fonts");
site.copy("files");
site.copy("scripts");
site.use(lightningcss());
site.use(basePath());
site.use(icons({
  name: "icon",
  defaultType: "duotone",
}));

site.remoteFile(
  "_includes/styles/reset.css",
  "https://cdn.jsdelivr.net/npm/modern-normalize@2.0.0/modern-normalize.css",
);

export default site;
