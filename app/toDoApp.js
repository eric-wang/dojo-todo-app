require(["dojo/_base/kernel", "dojo/_base/lang", "dojo/_base/loader"], function(dojo, lang){
	var path = window.location.pathname;
	if (path.charAt(path.length) != "/") {
		path = path.split("/");
		path.pop();
		path = path.join("/");
	}
	dojo.registerModulePath("app", path);

	require(["dojo", "dojox/app/main", "dojox/json/ref", "dojo/text!app/config.json", "dojo/_base/connect"],
	function(dojo, Application, jsonRef, config, connect){
		app = Application(jsonRef.fromJson(config));
	});
});