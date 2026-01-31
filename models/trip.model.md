# Trip Model
Table Name: `trips`

| Field | Type | Description |
| :--- | :--- | :--- |
| id | UUID | Primary Key |
| vehicle_id | UUID | Foreign Key -> vehicles.id |
| driver_id | UUID | Foreign Key -> profiles.id |
| start_time | Timestamp | Trip Start |
| end_time | Timestamp | Trip End |