import { DegreeElement } from "./base-element.js";
import { sumHours, formatCreditHours } from "../hours.js";
import { resolveThemeColor } from "../color.js";
import { escapeHtml } from "../util.js";
/** Root element: header band (name + total hours) and the years grid. */
export class DegreeMapElement extends DegreeElement {
    #plan = null;
    set plan(value) {
        this.#plan = value;
        this.#update();
    }
    get plan() {
        return this.#plan;
    }
    #update() {
        const plan = this.#plan;
        if (!plan)
            return;
        const allCourses = plan.years.flatMap((year) => year.semesters.flatMap((semester) => semester.courses));
        const total = formatCreditHours(sumHours(allCourses));
        const bandColor = resolveThemeColor(plan);
        this.renderShadow(`
      <style>
        :host {
          display: block;
          min-width: 1366px;
          font-family: system-ui, sans-serif;
        }
        .version {
          text-align: right;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.7rem;
          color: #666;
          padding: 0.35rem 1.25rem 0;
        }
        .band {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: ${bandColor};
          color: #fff;
          padding: 0.75rem 1.25rem;
        }
        .band .name {
          font-size: 1.5rem;
          font-weight: 700;
        }
        .band .hours {
          font-size: 1.05rem;
          font-weight: 700;
        }
        .years {
          display: flex;
          flex-direction: row;
          gap: 3rem;
          padding: 0.25rem 1.25rem 0;
        }
        .years > * {
          flex: 1;
          min-width: 0;
        }
        .rule {
          border: none;
          border-top: 3px solid ${bandColor};
          margin: 0.5rem 1.25rem 0.75rem;
        }
        .totals {
          display: flex;
          gap: 3rem;
          padding: 0 1.25rem 1.25rem;
        }
        .year-totals {
          display: flex;
          flex: 1;
          gap: 1.5rem;
        }
        .total {
          flex: 1;
          min-width: 0;
          text-align: center;
          font-size: 0.85rem;
          font-weight: 600;
          color: ${bandColor};
        }
        @media (max-width: 640px) {
          :host {
            min-width: 0;
          }
          .version {
            text-align: left;
          }
          .band {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }
          .years {
            flex-direction: column;
          }
          .years > * {
            flex: none;
          }
          /* Each semester's own total renders inline (in <degree-semester>)
             on mobile instead, since a single shared row spanning "columns"
             doesn't make sense once everything stacks into one column. */
          .rule,
          .totals {
            display: none;
          }
        }
        @media print {
          :host {
            min-width: 0;
          }
          .version {
            font-size: 0.55rem;
            padding: 0.15rem 0.6rem 0;
          }
          .band {
            padding: 0.35rem 0.6rem;
          }
          .band .name {
            font-size: 1rem;
          }
          .band .hours {
            font-size: 0.75rem;
            font-weight: 700;
          }
          .years {
            gap: 0.8rem;
            padding: 0.1rem 0.4rem 0;
          }
          .rule {
            margin: 0.2rem 0.4rem 0.25rem;
          }
          .totals {
            gap: 0.8rem;
            padding: 0 0.4rem 0.4rem;
          }
          .year-totals {
            gap: 0.4rem;
          }
          .total {
            font-size: 0.68rem;
            font-weight: 600;
          }
        }
      </style>
      ${plan.version ? `<div class="version">${escapeHtml(plan.version)}</div>` : ""}
      <header class="band">
        <span class="name">${escapeHtml(plan.name)}</span>
        <span class="hours">${escapeHtml(total)}</span>
      </header>
      <div class="years"></div>
      <hr class="rule" />
      <div class="totals"></div>
    `);
        const yearsContainer = this.root.querySelector(".years");
        const totalsContainer = this.root.querySelector(".totals");
        for (const year of plan.years) {
            const yearEl = document.createElement("degree-year");
            yearEl.plan = plan;
            yearEl.year = year;
            yearsContainer.append(yearEl);
            const yearTotalsEl = document.createElement("div");
            yearTotalsEl.className = "year-totals";
            for (const semester of year.semesters) {
                const totalEl = document.createElement("div");
                totalEl.className = "total";
                totalEl.textContent = `(${formatCreditHours(sumHours(semester.courses))})`;
                yearTotalsEl.append(totalEl);
            }
            totalsContainer.append(yearTotalsEl);
        }
    }
}
customElements.define("degree-map", DegreeMapElement);
