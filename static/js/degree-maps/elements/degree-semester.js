import { DegreeElement } from "./base-element.js";
import { sumHours, formatCreditHours } from "../hours.js";
import { resolveColor, resolveThemeColor } from "../color.js";
import { groupIntoRows } from "../layout.js";
import { escapeHtml } from "../util.js";
/**
 * A semester column: name and stacked course boxes. On wide screens the
 * rule + credit-hour total live in <degree-map> instead, as one shared row
 * spanning every column, so the line reads as continuous rather than
 * per-column segments. On mobile, where everything collapses to a single
 * column anyway, this component renders its own rule + total right after
 * its own courses instead (hidden here otherwise).
 */
export class DegreeSemesterElement extends DegreeElement {
    #semester = null;
    #plan = null;
    set semester(value) {
        this.#semester = value;
        this.#update();
    }
    get semester() {
        return this.#semester;
    }
    set plan(value) {
        this.#plan = value;
        this.#update();
    }
    get plan() {
        return this.#plan;
    }
    #update() {
        const semester = this.#semester;
        const plan = this.#plan;
        if (!semester || !plan)
            return;
        const total = formatCreditHours(sumHours(semester.courses));
        const bandColor = resolveThemeColor(plan);
        this.renderShadow(`
      <style>
        :host {
          display: block;
          font-family: system-ui, sans-serif;
        }
        .name {
          text-align: center;
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: ${bandColor};
        }
        .courses {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .row {
          display: block;
        }
        .row.split {
          display: flex;
          gap: 0.5rem;
        }
        .row.split > * {
          flex: 1;
          min-width: 0;
        }
        .mobile-total {
          display: none;
        }
        @media (max-width: 640px) {
          .mobile-total {
            display: block;
          }
          .mobile-total hr {
            border: none;
            border-top: 3px solid ${bandColor};
            margin: 0.75rem 0 0.35rem;
          }
          .mobile-total .total {
            text-align: center;
            font-size: 0.9rem;
            font-weight: 600;
            color: ${bandColor};
          }
        }
        @media print {
          :host {
            break-inside: avoid;
          }
          .name {
            font-size: 0.75rem;
            margin-bottom: 0.25rem;
          }
          .courses {
            gap: 0.2rem;
          }
          .row.split {
            gap: 0.2rem;
          }
        }
      </style>
      <div class="name">${escapeHtml(semester.name)}</div>
      <div class="courses"></div>
      <div class="mobile-total">
        <hr />
        <div class="total">(${escapeHtml(total)})</div>
      </div>
    `);
        const container = this.root.querySelector(".courses");
        for (const row of groupIntoRows(semester.courses)) {
            const rowEl = document.createElement("div");
            rowEl.className = row.length > 1 ? "row split" : "row";
            for (const entry of row) {
                const courseEl = document.createElement("degree-course");
                courseEl.color = resolveColor(entry, plan);
                courseEl.entry = entry;
                rowEl.append(courseEl);
            }
            container.append(rowEl);
        }
    }
}
customElements.define("degree-semester", DegreeSemesterElement);
