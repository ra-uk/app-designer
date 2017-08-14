
// If you set a display_col, that column will be shown in the large text for each row item.
// If you don't set one, we'll try and use the table id to pull it from this variable, which stores the
// instance column for each table or _id if it couldn't be found.
var display_cols = {"household_member": "name", "femaleClients": "_id", "maleClients": "_id", "exampleForm": "name", "Ethiopia_members": "name", "Tea_types": "Name", "plot": "plot_name", "Tea_inventory": "_id", "geopoints": "_id", "datesTest": "test", "selects": "_id", "visit": "_id", "Ethiopia_household": "household_id", "Tea_houses": "Name"}
// List of tables we can add/edit with formgen, if the table isn't found in this list, we'll use survey
var allowed_tables = ["household_member", "femaleClients", "maleClients", "exampleForm", "Ethiopia_members", "Tea_types", "plot", "Tea_inventory", "geopoints", "datesTest", "selects", "Ethiopia_household", "Tea_houses"]
// A map of table ids to tokens that can be used to localize their display name
var display_col_wrapper = null;
var clicked = function(table_id, row_id) {
	odkTables.openDetailView({}, table_id, row_id);
}
var customJsOl = function customJsOl() {
	
	display_col = "date";
	display_col_wrapper = function display_col_wrapper(d, i, c) {
		return c.split("T")[0];
	}
	global_cols_to_select = "visit.*, plot.plot_name AS plot_name";
	global_join = "plot ON plot._id = visit.plot_id";
	display_subcol = [{"column": "plot_name"}];
	table_id = "visit";

}
var customJsSearch = function customJsSearch() {
	
	stuff = document.getElementsByClassName("displays");
	for (var i = 0; i < stuff.length; i++) {
		stuff[i].style.width = "100%";
	}

}


var embedded = false;
var forMapView = false;