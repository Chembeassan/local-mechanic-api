# Local Mechanic Finder API

## API Endpoints

### Mechanics
- `POST /api/mechanics` - Create new mechanic
- `GET /api/mechanics` - Get all mechanics
- `GET /api/mechanics/:id` - Get single mechanic
- `PUT /api/mechanics/:id` - Update mechanic
- `DELETE /api/mechanics/:id` - Delete mechanic

### Services
- `POST /api/services` - Create new service
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get single service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

## Sample Request
```json
POST /api/mechanics
{
  "name": "Chilobwe Auto Care",
  "location": "Blantyre",
  "specialty": "Engine",
  "contact": "+265991234567",
  "hourlyRate": 15000
}
