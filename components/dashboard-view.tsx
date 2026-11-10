"use client";

import { useMemo, useState } from "react";
import { clients, leads, total } from "@/lib/demo-data";

function LeadsChart({ values }: { values: number[] }) {
  const width = 640;
  const height = 220;
  const padding = { top: 16, right: 12, bottom: 30, left: 36 };
  const max = Math.max(4, Math.ceil(Math.max(...values) / 4) * 4);
  const x = (index: number) =>
    padding.left + (index * (width - padding.left - padding.right)) / 13;
  const y = (value: number) =>
    padding.top +
    (1 - value / max) * (height - padding.top - padding.bottom);
  const points = values.map((value, index) => `${x(index)},${y(value)}`).join(" ");

  return (
    <svg
      className="dashboard-chart"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Leads captured per day in the last 14 days"
    >
      {[0, 1, 2, 3, 4].map((step) => {
        const value = (max * step) / 4;
        const lineY = y(value);

        return (
          <g key={step}>
            <line
              x1={padding.left}
              x2={width - padding.right}
              y1={lineY}
              y2={lineY}
              className="chart-grid-line"
            />
            <text x={padding.left - 10} y={lineY + 4} textAnchor="end">
              {Math.round(value)}
            </text>
          </g>
        );
      })}
      <polygon
        points={`${x(0)},${y(0)} ${points} ${x(13)},${y(0)}`}
        className="chart-area"
      />
      <polyline points={points} className="chart-line" />
      <circle cx={x(13)} cy={y(values[13])} r="5" className="chart-point" />
      <text x={x(0)} y={height - 7}>
        14 days ago
      </text>
      <text x={x(13)} y={height - 7} textAnchor="end">
        Today
      </text>
    </svg>
  );
}

export default function DashboardView() {
  const [selectedClient, setSelectedClient] = useState(-1);
  const filteredClients = useMemo(
    () => (selectedClient < 0 ? clients : [clients[selectedClient]]),
    [selectedClient],
  );
  const stats = useMemo(() => {
    const dailyLeads = Array(14).fill(0) as number[];
    const dailyChats = Array(14).fill(0) as number[];

    filteredClients.forEach((client) => {
      client.leadsByDay.forEach((value, index) => {
        dailyLeads[index] += value;
        dailyChats[index] += client.chatsByDay[index];
      });
    });

    const currentWeek = total(dailyLeads.slice(7));
    const previousWeek = total(dailyLeads.slice(0, 7));
    const weeklyChange = previousWeek
      ? Math.round((currentWeek / previousWeek) * 100 - 100)
      : currentWeek
        ? 100
        : 0;

    return {
      dailyChats,
      dailyLeads,
      leads: total(dailyLeads),
      chats: total(dailyChats),
      weeklyChange,
      liveAgents: filteredClients.filter((client) => client.live).length,
    };
  }, [filteredClients]);
  const filteredLeads = leads
    .filter(
      (lead) => selectedClient < 0 || lead.clientIndex === selectedClient,
    )
    .slice(0, 6);
  const activeClient = clients[selectedClient < 0 ? 0 : selectedClient];

  return (
    <main className="dashboard-main page-shell">
      <div className="dashboard-heading">
        <div>
          <div className="eyebrow">Agency console</div>
          <h1>
            Northline Digital <span className="sample-badge">Sample data</span>
          </h1>
          <p>A clear view of the conversations happening across your clients.</p>
        </div>
        <label className="client-filter">
          <span>Viewing</span>
          <select
            aria-label="Filter dashboard by client"
            onChange={(event) => setSelectedClient(Number(event.target.value))}
            value={selectedClient}
          >
            <option value={-1}>All clients</option>
            {clients.map((client, index) => (
              <option key={client.name} value={index}>
                {client.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <section className="kpi-grid" aria-label="Performance summary">
        <article className="kpi-card">
          <span>Conversations</span>
          <strong>{stats.chats}</strong>
          <small>Last 14 days</small>
        </article>
        <article className="kpi-card">
          <span>Leads captured</span>
          <strong>{stats.leads}</strong>
          <small className={stats.weeklyChange < 0 ? "metric-neutral" : ""}>
            {stats.weeklyChange > 0 ? "+" : ""}
            {stats.weeklyChange}% vs prior week
          </small>
        </article>
        <article className="kpi-card">
          <span>Lead capture rate</span>
          <strong>
            {stats.chats
              ? `${Math.round((stats.leads / stats.chats) * 100)}%`
              : "0%"}
          </strong>
          <small>Chats to leads</small>
        </article>
        <article className="kpi-card">
          <span>Agents live</span>
          <strong>
            {stats.liveAgents}
            <span className="kpi-total"> / {filteredClients.length}</span>
          </strong>
          <small>Across selected clients</small>
        </article>
      </section>

      <section className="dashboard-grid dashboard-grid-primary">
        <article className="dashboard-card chart-card">
          <div className="card-heading">
            <div>
              <h2>Leads over time</h2>
              <p>Captured each day over the last two weeks</p>
            </div>
            <span className="chart-legend">
              <i /> Leads
            </span>
          </div>
          <LeadsChart values={stats.dailyLeads} />
        </article>
        <article className="dashboard-card">
          <div className="card-heading">
            <div>
              <h2>Recent leads</h2>
              <p>The latest enquiries from your clients</p>
            </div>
            <span className="live-indicator">
              <i /> Live
            </span>
          </div>
          <div className="lead-list">
            {filteredLeads.length ? (
              filteredLeads.map((lead) => (
                <article className="lead-item" key={`${lead.name}-${lead.time}`}>
                  <div className="lead-item-top">
                    <strong>{lead.name}</strong>
                    <span
                      className={`status-pill ${
                        lead.status === "In progress" ? "status-pending" : ""
                      }`}
                    >
                      {lead.status}
                    </span>
                  </div>
                  <p>{lead.interest}</p>
                  <small>
                    {lead.contact || "No contact yet"} <span>·</span>{" "}
                    {clients[lead.clientIndex].name}
                  </small>
                </article>
              ))
            ) : (
              <p className="empty-state">No recent leads for this client yet.</p>
            )}
          </div>
        </article>
      </section>

      <section className="dashboard-grid dashboard-grid-secondary">
        <article className="dashboard-card">
          <div className="card-heading">
            <div>
              <h2>Your clients</h2>
              <p>Agent activity for the last 14 days</p>
            </div>
          </div>
          <div className="table-scroll">
            <table className="client-table">
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Agent</th>
                  <th>Chats</th>
                  <th>Leads</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((client) => (
                  <tr key={client.name}>
                    <td>{client.name}</td>
                    <td>{client.agent}</td>
                    <td>{total(client.chatsByDay)}</td>
                    <td>{total(client.leadsByDay)}</td>
                    <td>
                      <span
                        className={`status-pill ${
                          client.live ? "" : "status-pending"
                        }`}
                      >
                        {client.live ? "Live" : "Setting up"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
        <article className="dashboard-card settings-card">
          <div className="card-heading">
            <div>
              <h2>Agent details</h2>
              <p>{activeClient.name}</p>
            </div>
            <span className="settings-mark">✳</span>
          </div>
          <dl className="settings-list">
            <div>
              <dt>Agent name</dt>
              <dd>{activeClient.agent}</dd>
            </div>
            <div>
              <dt>Conversation tone</dt>
              <dd>{activeClient.tone}</dd>
            </div>
            <div>
              <dt>Primary goal</dt>
              <dd>{activeClient.goal}</dd>
            </div>
            <div>
              <dt>Knowledge base</dt>
              <dd>{activeClient.knowledgeBase}</dd>
            </div>
            <div>
              <dt>Lead notifications</dt>
              <dd>Email on every new lead</dd>
            </div>
          </dl>
        </article>
      </section>
      <p className="dashboard-disclaimer">
        Sample dashboard · Example data is shown for demonstration purposes.
      </p>
    </main>
  );
}
