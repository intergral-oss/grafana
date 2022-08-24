// Copyright 2022 Grafana Labs
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// This file is autogenerated. DO NOT EDIT.
//
// Run `make gen-cue` from repository root to regenerate.

package registry

import (
	"fmt"
	"io/fs"

	"github.com/grafana/grafana"
	"github.com/grafana/grafana/pkg/plugins/pfs"
	"github.com/grafana/thema"
)

func makeTreeOrPanic(path string, pkgname string, lib thema.Library) *pfs.Tree {
	sub, err := fs.Sub(grafana.CueSchemaFS, path)
	if err != nil {
		panic("could not create fs sub to " + path)
	}
	tree, err := pfs.ParsePluginFS(sub, lib)
	if err != nil {
		panic(fmt.Sprintf("error parsing plugin metadata for %s: %s", pkgname, err))
	}
	return tree
}

func coreTreeList(lib thema.Library) TreeList {
	return TreeList{
		makeTreeOrPanic("public/app/plugins/datasource/alertmanager", "alertmanager", lib),
		makeTreeOrPanic("public/app/plugins/datasource/cloud-monitoring", "stackdriver", lib),
		makeTreeOrPanic("public/app/plugins/datasource/cloudwatch", "cloudwatch", lib),
		makeTreeOrPanic("public/app/plugins/datasource/dashboard", "dashboard", lib),
		makeTreeOrPanic("public/app/plugins/datasource/elasticsearch", "elasticsearch", lib),
		makeTreeOrPanic("public/app/plugins/datasource/grafana", "grafana", lib),
		makeTreeOrPanic("public/app/plugins/datasource/grafana-azure-monitor-datasource", "grafana_azure_monitor_datasource", lib),
		makeTreeOrPanic("public/app/plugins/datasource/graphite", "graphite", lib),
		makeTreeOrPanic("public/app/plugins/datasource/jaeger", "jaeger", lib),
		makeTreeOrPanic("public/app/plugins/datasource/loki", "loki", lib),
		makeTreeOrPanic("public/app/plugins/datasource/mssql", "mssql", lib),
		makeTreeOrPanic("public/app/plugins/datasource/mysql", "mysql", lib),
		makeTreeOrPanic("public/app/plugins/datasource/postgres", "postgres", lib),
		makeTreeOrPanic("public/app/plugins/datasource/prometheus", "prometheus", lib),
		makeTreeOrPanic("public/app/plugins/datasource/tempo", "tempo", lib),
		makeTreeOrPanic("public/app/plugins/datasource/testdata", "testdata", lib),
		makeTreeOrPanic("public/app/plugins/datasource/zipkin", "zipkin", lib),
		makeTreeOrPanic("public/app/plugins/panel/alertGroups", "alertGroups", lib),
		makeTreeOrPanic("public/app/plugins/panel/alertlist", "alertlist", lib),
		makeTreeOrPanic("public/app/plugins/panel/annolist", "annolist", lib),
		makeTreeOrPanic("public/app/plugins/panel/barchart", "barchart", lib),
		makeTreeOrPanic("public/app/plugins/panel/bargauge", "bargauge", lib),
		makeTreeOrPanic("public/app/plugins/panel/dashlist", "dashlist", lib),
		makeTreeOrPanic("public/app/plugins/panel/debug", "debug", lib),
		makeTreeOrPanic("public/app/plugins/panel/gauge", "gauge", lib),
		makeTreeOrPanic("public/app/plugins/panel/geomap", "geomap", lib),
		makeTreeOrPanic("public/app/plugins/panel/gettingstarted", "gettingstarted", lib),
		makeTreeOrPanic("public/app/plugins/panel/graph", "graph", lib),
		makeTreeOrPanic("public/app/plugins/panel/histogram", "histogram", lib),
		makeTreeOrPanic("public/app/plugins/panel/icon", "icon", lib),
		makeTreeOrPanic("public/app/plugins/panel/live", "live", lib),
		makeTreeOrPanic("public/app/plugins/panel/logs", "logs", lib),
		makeTreeOrPanic("public/app/plugins/panel/news", "news", lib),
		makeTreeOrPanic("public/app/plugins/panel/nodeGraph", "nodeGraph", lib),
		makeTreeOrPanic("public/app/plugins/panel/piechart", "piechart", lib),
		makeTreeOrPanic("public/app/plugins/panel/stat", "stat", lib),
		makeTreeOrPanic("public/app/plugins/panel/table-old", "table_old", lib),
		makeTreeOrPanic("public/app/plugins/panel/text", "text", lib),
		makeTreeOrPanic("public/app/plugins/panel/traces", "traces", lib),
		makeTreeOrPanic("public/app/plugins/panel/welcome", "welcome", lib),
		makeTreeOrPanic("public/app/plugins/panel/xychart", "xychart", lib),
	}
}
