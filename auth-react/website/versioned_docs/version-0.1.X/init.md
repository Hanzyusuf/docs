---
id: version-0.1.X-init
title: Init
hide_title: true
original_id: init
---

# Call the `init` function

In your `App.js` file, import SuperTokens and call the `init` function.

```js
import SuperTokens from "supertokens-auth-react";

SuperTokens.init({
 	appInfo: {
__HIGHLIGHT__        appName: "YOUR APP NAME", // Example: "SuperTokens",
        apiDomain: "YOUR API DOMAIN", // Example: "https://api.supertokens.io",
        websiteDomain: "YOUR WEBSITE DOMAIN" // Example: "https://supertokens.io"
	} __END_HIGHLIGHT__
});
```

Make sure to replace all the above configurations values with yours.

### Config values

- **appName**:
    - Description: This value represent the name of your application.
    - Default: ```""```
    - Example: ```appName: "SuperTokens"```

- **apiDomain**:
    - Description: This is your API domain that is used to serve resources to your users.
    - Default: ```""```
    - Example: ```apiDomain: "https://api.supertokens.io"```

- **websiteDomain**:
    - Description: This is your website URL.
    - Default: ```""```
    - Example: ```websiteDomain: "https://supertokens.io"```

- **apiBasePath**:
    - Description: This is the base path prefixes all the back end routes managed by SuperTokens.
    - Default: ```"/auth"```
    - Example: ```apiBasePath: "/api/v3/auth"```
    - Optional

- **websiteBasePath**: 
    - Description: This is the base path prefixes all the front end routes managed by SuperTokens.
    - Default: ```"/auth"```
    - Example: ```websiteBasePath: "/authentication"```
    - Optional


<div class="specialNote" style="margin-bottom: 40px">
If you try to refresh your website, you might see the following error "Please provide at least one recipe to the supertokens.init function call" in your console. Make sure to read about the email password following section.
</div>


To setup routing for SuperTokens, please refer to the [starter guide](/docs/emailpassword/quick-setup/frontend#3-setup-routes).