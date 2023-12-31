import React from "react";

function ProjectReadMe(){
return (
    <div className="read-me">
        <h1 id="datapipe">DataPipe</h1>
<p>DataPipe is a project that implements three ETL (Extract, Transform, Load) pipelines for processing dynamic data which is been generating dynamically from an e-commerce website.</p>
<p>In this project a advanced library named &quot;generate_data_library&quot; is created to generate data which is almost similar to that of generated by a ecommerce website.</p>
<hr/>
<h2 id="sql-database-schema">SQL Database Schema</h2>
<p><strong>Database Name:</strong> website</p>
<h3 id="the-website-database-consists-of-the-following-tables-">The <code>website</code> database consists of the following tables:</h3>
<p><img src = "./all_tables.jpg" height = "300px" width = "400px"></img></p>
<h2 id="csv-dataset-containing-products-information">CSV Dataset Containing Products Information</h2>
<p><strong>Name of the CSV file:</strong> products_table.csv <br />
<strong>Location of the CSV file:</strong> <a href="dataset/product_table.csv">&quot;products_table.csv&quot;</a></p>
<hr/>
<h2 id="dynamic-data-generation">Dynamic Data Generation</h2>
<p>This project utilizes dynamic data, which closely resembles to real-world data generated by an e-commerce website. To generate live data for testing and development purposes, an advanced library <a href="generate_data_library"><code>generate_data_library</code></a> is used.</p>
<h3 id="features-of-generate_data_library-">Features of <code>generate_data_library</code>:</h3>
<ul>
<li>Generates realistic user signup data, transaction data, and refund request data.</li>
<li>Offers configurable parameters such as the number of users, transaction frequency, refund request patterns, etc.</li>
<li>Provides flexibility to customize the data generation process to simulate various scenarios.</li>
</ul>
<h3 id="steps-to-generate-data-useing-generate_data_library-">Steps to generate data useing <code>generate_data_library</code>:</h3>
<ol>
<li>Run the jupyter Notebook <a href="Generate_all_data.ipynb"><code>Generate_all_data.ipynb</code></a> to stat generating the data.</li>
<li>This jupyter Notebook is using the library <code>generate_data_library</code> and with the help of threading it is able to generate User&#39;s data, Transaction Data and Refund Data simultaneously.</li>
</ol>
<hr/>
<h2 id="pipelines-to-peform-etl-extract-transform-load-on-the-data-">Pipelines to peform ETL (Extract, Transform, Load) on the Data.</h2>
<h3 id="pipeline-1-user-signup-summary">Pipeline 1: User Signup Summary</h3>
<p align = "center"><img src = "./user_pipeline.jpg" height = "300px"></img></p>

<p>This pipeline focuses on summarizing user signup data from the e-commerce website. It extracts relevant information, transforms it into a meaningful format, and loads it for further analysis and reporting.</p>
<h3 id="components-and-steps-">Components and Steps:</h3>
<h4 id="1-extraction-">1. Extraction:</h4>
<ul>
<li>Retrieve user signup data from the e-commerce website&#39;s database or relevant data sources.<h4 id="-users-table-schema">&quot;users&quot; table schema</h4>
<img src="./user_table_data.jpg" alt="users_Table"/></li>
</ul>
<h4 id="2-transformation-">2. Transformation:</h4>
<ul>
<li>Perform data cleaning and preprocessing.</li>
<li>Apply aggregations or calculations to derive meaningful insights.</li>
<li>Generate a summarized view of the user signup data.<h4 id="transformed-data">Transformed Data</h4>
<img src="./user_summary_table.jpg" alt="summary_table"/></li>
</ul>
<h4 id="3-load-">3. Load:</h4>
<ul>
<li>Store the processed and summarized data in a suitable format (e.g., a database, CSV file, or data warehouse).</li>
<li>Ensure appropriate indexing or organization for efficient retrieval and analysis.</li>
</ul>

    </div>
)
}
export default ProjectReadMe