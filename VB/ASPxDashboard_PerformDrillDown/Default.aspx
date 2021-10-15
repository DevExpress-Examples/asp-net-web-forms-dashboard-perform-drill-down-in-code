<%@ Page Language="vb" AutoEventWireup="true" CodeBehind="Default.aspx.vb" Inherits="ASPxDashboard_PerformDrillDown.Default" %>

<!DOCTYPE html>

<html>
<head runat="server">
	<title></title>
	<script src="Scripts/DrillDown.js"></script>
</head>
<body>
	<form id="form1" runat="server">
		<div id="selectBox" style="float: left;"></div>
		<div id="buttonContainer" style="float: left; margin-left: 150px;"></div>

		<div style="position: absolute; left: 0; right: 0; top:50px; bottom:0;">
			<dx:ASPxDashboard ID="ASPxDashboard1" runat="server" WorkingMode="Viewer" ClientInstanceName="webDashboard"
				Width="100%" Height="100%"
				ClientSideEvents-DashboardEndUpdate="initializeControls"
				ClientSideEvents-ActionAvailabilityChanged="ActionAvailabilityChanged"
				ClientSideEvents-BeforeRender="onBeforeRender">
			</dx:ASPxDashboard>
		</div>
	</form>
</body>
</html>