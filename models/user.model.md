# User Model
Table Name: `profiles` (Linked to Auth.Users)

| Field | Type | Description |
| :--- | :--- | :--- |
| id | UUID | Primary Key (Auth Link) |
| full_name | String | Driver/Admin Name |
| email | String | Unique Identifier |
| role | Enum | 'admin' or 'driver' |