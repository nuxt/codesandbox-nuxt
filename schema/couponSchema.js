export default {
  type: "object",
  required: ["id", "active", "vendor", "title", "description"],
  properties: {
    id: { type: "string" }, //
    active: { type: "boolean" }, //"boolean", // true,
    usageCount: { type: "number" }, //"num93,
    vendor: { type: "string" }, //"Holz & Hygge",
    title: { type: "string" }, //"Kaufe Eins erhalte Zwei",
    description: { type: "string" }, //"Beim Kauf von 2 Heißgetränken erhälst du das günstigere umsonst",
    image: { type: "string" }, //"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAADtJREFUSA1jtLW1/c9AQ8BEQ7PBRo9aQDCER4NoNIgIhgBBBaOpaDSICIYAQQWjqWg0iAiGAEEFNE9FAG3uAeZT5P+eAAAAAElFTkSuQmCC",
    submit: {
      type: "object",
      properties: {
        info: { type: "string" }, //"Du kaufst ein Heißgetränk und bekommst zwei. Scanne dazu den Freischaltcode vorort im Geschäft.",
        code: { type: "string" } //"123"
      }
    },
    location: {
      type: "object",
      properties: {
        title: { type: "string" }, //"Holz & Hygge",
        address: { type: "string" }, //"Unterlauengasse 2, 07743 Jena",
        iOSLink: { type: "string" }, //"https://maps.apple.com/?daddr=holz+&+hygge+Jena&dirflg=d&t=h",
        androidLink: { type: "string" } //"https://maps.google.com/?daddr=holzundhygge+Jena&dirflg=d&t=h"
      }
    },
    balance: { type: "number" } //95
  }
};
