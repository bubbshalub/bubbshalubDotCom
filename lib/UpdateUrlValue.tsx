import AppendToUrl from "./AppendToUrl";

export default function UpdateUrlValue(key: string, value: string) {
  let newValue = value;
  if (value == null) {
    console.warn("value == null");
    value = "0";
    newValue = "0";
  } else {
    // Update the key and value correctly
    value = "&" + key + "=" + value;
    console.log("value == " + value);
  }

  let currentURL = window.location.href.toString();

  // If the URL has no values, initialize with a question mark
  if (!currentURL.includes("?")) {
    AppendToUrl("?");
  }

  // If the key doesn't exist, add it with the provided value
  if (!currentURL.includes("&" + key + "=")) {
    console.warn("value not found, adding");
    AppendToUrl(value);
    return;
  }

  // Find the key and update its value using a regular expression
  let regex = new RegExp(`&${key}=[^&]*`);
  let updatedURL = currentURL.replace(regex, value);

  // Update the URL in the browser history
  window.history.replaceState({}, document.title, updatedURL);

  // Log the updated URL for debugging
  console.log("Updated URL: " + updatedURL);
}
