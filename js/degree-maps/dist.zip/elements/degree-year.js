import { DegreeElement } from "./base-element.js";
import { resolveThemeColor } from "../color.js";
import { escapeHtml } from "../util.js";
/** A year grouping: year name centered above its row of semester columns. */
export class DegreeYearElement extends DegreeElement {
    #year = null;
    #plan = null;
    set year(value) {
        this.#year = value;
        this.#update();
    }
    get year() {
        return this.#year;
    }
    set plan(value) {
        this.#plan = value;
        this.#update();
    }
    get plan() {
        return this.#plan;
    }
    #update() {
        const year = this.#year;
        const plan = this.#plan;
        if (!year || !plan)
            return;
        const bandColor = resolveThemeColor(plan);
        this.renderShadow(`
      <style>
        :host {
          display: block;
          font-family: system-ui, sans-serif;
        }
        .name {
          text-align: center;
          font-weight: 700;
          font-size: 1.9rem;
          margin-bottom: -1rem;
          color: ${bandColor};
        }
        .semesters {
          display: flex;
          gap: 1.5rem;
        }
        .semesters > * {
          flex: 1;
          min-width: 0;
        }
        @media (max-width: 640px) {
          .name {
            margin-bottom: 0.5rem;
          }
          .semesters {
            flex-direction: column;
            gap: 1rem;
          }
          .semesters > * {
            flex: none;
          }
        }
        @media print {
          :host {
            break-inside: avoid;
          }
          .name {
            font-size: 1.4rem;
            margin-bottom: 0.25rem;
          }
          .semesters {
            gap: 0.4rem;
          }
        }
      </style>
      <div class="name">${escapeHtml(year.name)}</div>
      <div class="semesters"></div>
    `);
        const container = this.root.querySelector(".semesters");
        for (const semester of year.semesters) {
            const semesterEl = document.createElement("degree-semester");
            semesterEl.plan = plan;
            semesterEl.semester = semester;
            container.append(semesterEl);
        }
    }
}
customElements.define("degree-year", DegreeYearElement);
