# Business Hours Override Widget

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/logicalisgt/contactcenter.git
   cd contactcenter
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage
To use the Business Hours Override Widget, include it in your project as follows:
```javascript
import BusinessHoursOverride from './BusinessHoursOverride';
```

You can then integrate it into your existing codebase to allow overriding standard business hours in your application.

### Example
```javascript
<BusinessHoursOverride override={true} />
```

## Deployment
1. Make sure all dependencies are installed and your code is properly tested.
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the generated files in the `dist` folder to your server or hosting environment.

## Additional Notes
- Ensure that you have proper environment variables set for production.
- Check the documentation for any third-party services that the widget might depend on.