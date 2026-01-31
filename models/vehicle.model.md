# Vehicle Model
Table Name: `vehicles`

| Field | Type | Description |
| :--- | :--- | :--- |
| id | UUID | Primary Key |
| plate_number | String | Unique License Plate |
| status | String | 'active', 'idle', 'maintenance' |
| last_location | Geography | PostGIS Point (Lat/Lng) |