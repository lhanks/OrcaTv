﻿using System.Web;
using System.Web.Optimization;

namespace OrcaTv {
	public class BundleConfig {
		// For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
		public static void RegisterBundles(BundleCollection bundles) {
			bundles.Add(new ScriptBundle("~/bundles/app").IncludeDirectory("~/app", "*.js"));
		}
	}
}
