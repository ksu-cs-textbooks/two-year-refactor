+++
title = "Kansas Living History"
weight = 10
ordinal = "1.0"
+++

{{< mermaid >}}

C4Container
  title Kansas Living History Project

  Enterprise_Boundary(web, "Historical Web Archive Application") {
    Container(web_frontend, "Web Frontend", "Vue.js", "Lets users browse and interact with the historical web archive")
    Container(web_api, "Archive API", ".NET", "Serves archive data and business logic over an API")
    ContainerDb(web_db, "Archive Database", "PostgreSQL", "Stores archival records and metadata")
  }

  Enterprise_Boundary(pipeline, "Kansas Data Viz Pipeline") {
    Container(pipeline_etl, "Transformation Pipeline", "Data Pipeline", "Draws data from the archive database and transforms it into static datasets")
    Container(pipeline_files, "Generated Datasets", "Static JSON / GeoJSON", "State, county, and community-level history data produced for the visualization app")
  }

  Enterprise_Boundary(visualization, "Kansas History Visualization") {
    Container(viz_app, "Visualization App", "Vue.js, D3.js", "Client-side app presenting Kansas history over time at the state, county, or community level")
  }

  Rel(web_frontend, web_api, "Makes API calls to", "JSON/HTTPS")
  Rel(web_api, web_db, "Reads from and writes to", "SQL/TCP")
  Rel(pipeline_etl, web_db, "Extracts data from", "SQL/TCP")
  Rel(pipeline_etl, pipeline_files, "Generates")
  Rel(viz_app, pipeline_files, "Loads", "HTTPS")

{{< /mermaid >}}