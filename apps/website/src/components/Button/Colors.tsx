import React from 'react';

import { Button } from '@condev-ui/ui';

export default function ButtonDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
      <div>
        <Button size="small" variant="filled">
          Filled
        </Button>
      </div>

      <div>
        <Button size="small" variant="light">
          Light
        </Button>
      </div>

      <div>
        <Button size="medium" variant="outline">
          Outline
        </Button>
      </div>

      <div>
        <Button size="large" variant="transparent">
          Transparent
        </Button>
      </div>

      <div>
        <Button size="large" variant="danger">
          Danger
        </Button>
      </div>
    </div>
  );
}
