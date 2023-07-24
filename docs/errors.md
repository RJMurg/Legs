# Error Codes

Legs may return error codes for many situations, either partially or completely replace the HTML output, and log an error to the database.
In most cases Legs should be able to recover from these errors, however in some cases it may not be able to.

## Table of codes
| Code | Reason                          |
|------|---------------------------------|
| 0    | Legs failed to start            |
| 1    | Configuration file not found    |
| 2    | Configuration file is inactive  |
| 3    | Configuration file is malformed |
| 4    | Endpoint not found              |
| 5    | Endpoint not responding         |