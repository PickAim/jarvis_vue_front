const host = import.meta.env.JARVIS_URL;
// const host = window.location.protocol + "//" + window.location.host + "/";

export const Configs = {
    AccessRequestPrefix: "/access",
    UpdateRequestPrefix: "/update",
    // ServerURL: "http://localhost:8090/",
    ServerURL: host ?? "http://localhost:8090/",
}
