const host = window.location.protocol + "//" + window.location.host + "/";

export const Configs = {
    AccessRequestPrefix: "/access",
    UpdateRequestPrefix: "/update",
    // ServerURL: "http://localhost:8090/",
    ServerURL: window.location.host === "localhost:8300" ? "http://localhost:8090/" : host,
}
