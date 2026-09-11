import { DegreeElement } from "./base-element.js";
import { formatHours } from "../hours.js";
import { escapeHtml } from "../util.js";
/**
 * A single course/elective box: a colored band on top showing the
 * identifier + hours, and the name below.
 */
export class DegreeCourseElement extends DegreeElement {
    #entry = null;
    #color = "";
    set entry(value) {
        this.#entry = value;
        this.#update();
    }
    get entry() {
        return this.#entry;
    }
    set color(value) {
        this.#color = value;
        this.#update();
    }
    get color() {
        return this.#color;
    }
    #update() {
        const entry = this.#entry;
        if (!entry)
            return;
        const header = entry.type === "elective"
            ? `Elective (${formatHours(entry.hours)})`
            : `${entry.subject} ${entry.number} (${formatHours(entry.hours)})`;
        const color = this.#color || "#333333";
        this.renderShadow(`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          min-height: 6rem;
          border: 2px solid ${color};
          border-radius: 4px;
          overflow: hidden;
          font-family: system-ui, sans-serif;
          background: #fff;
        }
        .band {
          background: ${color};
          color: #fff;
          font-weight: 600;
          font-size: 1.04rem;
          padding: 0.35rem 0.5rem;
        }
        .name {
          color: #000;
          font-size: 0.75rem;
          padding: 0.4rem 0.5rem 0;
        }
        .prereqs {
          color: #555;
          font-size: 0.65rem;
          padding: 0.25rem 0.5rem 0.4rem;
          margin-top: auto;
        }
        @media print {
          :host {
            break-inside: avoid;
          }
          .band {
            font-size: 0.7rem;
            padding: 0.2rem 0.3rem;
          }
          .name {
            font-size: 0.55rem;
            padding: 0.2rem 0.3rem 0;
          }
          .prereqs {
            font-size: 0.5rem;
            padding: 0.15rem 0.3rem 0.2rem;
          }
        }
      </style>
      <div class="band">${escapeHtml(header)}</div>
      <div class="name">${escapeHtml(entry.name)}</div>
      ${entry.prerequisites?.length
            ? `<div class="prereqs">${entry.prerequisites
                .map((p) => escapeHtml(`${p.type}: ${p.text}`))
                .join("<br />")}</div>`
            : ""}
    `);
    }
}
customElements.define("degree-course", DegreeCourseElement);
