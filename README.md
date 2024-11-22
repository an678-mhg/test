# ERD for Google Analytics G4A Report System

## Tables

### 1. Users
| Column       | Type       | Description                |
|--------------|------------|----------------------------|
| id (PK)      | UUID/INT   | Primary key                |
| name         | String     | Name of the user           |
| email        | String     | Email of the user          |
| ...          | ...        | Other user information     |

### 2. Connection
| Column         | Type       | Description                                 |
|----------------|------------|---------------------------------------------|
| id (PK)        | UUID/INT   | Primary key                                 |
| user_id (FK)   | UUID/INT   | Foreign key referencing `Users.id`          |
| ad_account_id  | String     | Account ID (e.g., G4A ID, Facebook Ads ID)  |
| access_token   | String     | Access token for API                        |
| refresh_token  | String     | Refresh token for renewing the access token |
| expired_time   | DateTime   | Expiry time of the access token             |

### 3. ChartConfig
| Column          | Type       | Description                                  |
|-----------------|------------|----------------------------------------------|
| id (PK)         | UUID/INT   | Primary key                                  |
| connection_id (FK) | UUID/INT | Foreign key referencing `Connection.id`     |
| x               | Float/Int  | X-coordinate for chart positioning          |
| y               | Float/Int  | Y-coordinate for chart positioning          |
| w               | Float/Int  | Width of the chart                          |
| h               | Float/Int  | Height of the chart                         |
| chart_type      | String     | Type of chart (e.g., `sessions`, `users`)   |
| title           | String     | Chart title                                 |
| value           | String     | Metric value for the chart                  |
| metadata        | JSON/Text  | Metadata (e.g., metrics, dimensions)        |
| chart_value     | JSON/Text  | Chart data including labels and datasets    |
| tab_value     | string  | Refer tab in front end (e.g., 'All', 'Organic Search')  |

---

## Relationships

### Users → Connection (1:N)
- A user can have multiple connections.

### Connection → ChartConfig (1:N)
- A connection can have multiple chart configurations.

---

## Diagram Representation

```plaintext
+---------------------+          +---------------------+
|      Users          |          |     Connection      |
|---------------------|          |---------------------|
| id (PK)            |<--+      | id (PK)            |
| name               |   |      | user_id (FK)       |
| email              |   |      | ad_account_id      |
| ...                |   |      | access_token       |
|                    |   |      | refresh_token      |
+---------------------+   |      | expired_time       |
                          |      +---------------------+
                          |
                          |
                          v
                   +---------------------+
                   |    ChartConfig      |
                   |---------------------|
                   | id (PK)            |
                   | connection_id (FK) |
                   | x                  |
                   | y                  |
                   | w                  |
                   | h                  |
                   | chart_type         |
                   | title              |
                   | value              |
                   | metadata           |
                   | chart_value        |
                   +---------------------+
