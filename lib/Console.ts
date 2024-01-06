export default function Console(
  enabled: boolean,
  type: string,
  message: string,
) {
  if (enabled == true) {
    switch (type) {
      case "log":
      case "l":
        console.log(message);
      case "error":
      case "err":
      case "e":
        console.error(message);
      default:
      case "warn":
      case "w":
        console.warn(message);
    }
  }
}
