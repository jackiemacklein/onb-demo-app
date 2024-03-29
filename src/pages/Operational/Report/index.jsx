/**
 * External Dependencies
 */
import React, { Component } from "react";

/**
 * Internal Dependencies
 */
import AsyncComponent from "../../../components/async-component";
import PageWrap from "../../../components/page-wrap";
import PageTitle from "../../../components/page-title";
import PageContent from "../../../components/page-content";

/**
 * Component
 */
class Mailbox extends Component {
  render() {
    return (
      <PageWrap>
        <PageTitle
          breadcrumbs={{
            "/": "Home",
            "/pdv/app": "Serviços & Vendas do App",
          }}>
          <h1>Relatório do Dia</h1>
        </PageTitle>
        <PageContent>
          <AsyncComponent component={() => import("./content")} />
        </PageContent>
      </PageWrap>
    );
  }
}

export default Mailbox;
