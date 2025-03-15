import React from 'react';

import { Button } from '@condev-ui/ui';

export default function ButtonDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
      <div>
        <Button size="small">Small</Button>
      </div>
      <div>
        <Button size="medium">Medium</Button>
      </div>
      <div>
        <Button size="large">Large</Button>
      </div>
    </div>
  );
}
