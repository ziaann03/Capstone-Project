export const appConfig = {
  "name": "Employee Management System",
  "short": "Employee Hub",
  "description": "Manage employee profiles, departments, designations, employment status, and contact details.",
  "collection": "employees",
  "singular": "employee",
  "fields": [
    {
      "name": "name",
      "label": "Full name",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "required": true,
      "options": []
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "designation",
      "label": "Designation",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "status",
      "label": "Status",
      "type": "select",
      "required": true,
      "options": [
        "Active",
        "On Leave",
        "Inactive"
      ]
    },
    {
      "name": "joinedDate",
      "label": "Joining date",
      "type": "date",
      "required": false,
      "options": []
    }
  ],
  "sample": [
    {
      "name": "Asha Menon",
      "email": "asha@example.com",
      "department": "Engineering",
      "designation": "Junior Developer",
      "status": "Active",
      "joinedDate": "2026-01-12"
    }
  ]
};
