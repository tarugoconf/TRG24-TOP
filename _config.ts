import lume from "lume/mod.ts";
import top from "top/mod.ts";

const site = lume({
  location: new URL("https://trgcon.com"),
});

site.use(top());
site.copy("fonts");

export default site;
