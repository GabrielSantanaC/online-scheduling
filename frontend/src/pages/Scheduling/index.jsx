import React from 'react';
import Page from '../../components/Page';
import SchedulingList from '../../components/Form/SchedulingList';

export default function index() {
  return (
    <Page title="Scheduling Page">
      <SchedulingList />
    </Page>
  );
}
