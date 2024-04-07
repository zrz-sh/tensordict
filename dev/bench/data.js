window.BENCHMARK_DATA = {
  "lastUpdate": 1712480875013,
  "repoUrl": "https://github.com/zrz-sh/tensordict",
  "entries": {
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "vmoens@meta.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6b6a4b3513cc8ad330af820f33aa13157fd7f0e",
          "message": "[BugFix, Feature] tensorclass.to_dict and from_dict (#707)",
          "timestamp": "2024-03-13T20:38:02Z",
          "tree_id": "0e1f61f3a0bd97b3f72a382fe036dcddb3250ae1",
          "url": "https://github.com/zrz-sh/tensordict/commit/d6b6a4b3513cc8ad330af820f33aa13157fd7f0e"
        },
        "date": 1712478323509,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_plain_set_nested",
            "value": 57931.241129545335,
            "unit": "iter/sec",
            "range": "stddev: 7.936477390796955e-7",
            "extra": "mean: 17.261843186887862 usec\nrounds: 8322"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_plain_set_stack_nested",
            "value": 57028.6415652891,
            "unit": "iter/sec",
            "range": "stddev: 8.928677231104351e-7",
            "extra": "mean: 17.535048574761376 usec\nrounds: 17293"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_plain_set_nested_inplace",
            "value": 49913.29667002159,
            "unit": "iter/sec",
            "range": "stddev: 0.000001556057265187569",
            "extra": "mean: 20.034741576198265 usec\nrounds: 29262"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_plain_set_stack_nested_inplace",
            "value": 50257.20576217215,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011095746372847879",
            "extra": "mean: 19.8976442250334 usec\nrounds: 32737"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items",
            "value": 399310.3938219568,
            "unit": "iter/sec",
            "range": "stddev: 1.9724982482922775e-7",
            "extra": "mean: 2.504317482018454 usec\nrounds: 93284"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_nested",
            "value": 3709.0916398703685,
            "unit": "iter/sec",
            "range": "stddev: 0.000015398691274727233",
            "extra": "mean: 269.6077900180837 usec\nrounds: 3186"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_nested_locked",
            "value": 3689.3103404066464,
            "unit": "iter/sec",
            "range": "stddev: 0.00001315050010670201",
            "extra": "mean: 271.05336979858873 usec\nrounds: 3629"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_nested_leaf",
            "value": 5995.224547672449,
            "unit": "iter/sec",
            "range": "stddev: 0.000008058041428574777",
            "extra": "mean: 166.79942378275626 usec\nrounds: 5281"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_stack_nested",
            "value": 3682.103229624993,
            "unit": "iter/sec",
            "range": "stddev: 0.000004290538235336348",
            "extra": "mean: 271.5839121386735 usec\nrounds: 3460"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_stack_nested_leaf",
            "value": 5938.43483649352,
            "unit": "iter/sec",
            "range": "stddev: 0.000009373534955817444",
            "extra": "mean: 168.39453956027106 usec\nrounds: 5460"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_stack_nested_locked",
            "value": 3688.761313587595,
            "unit": "iter/sec",
            "range": "stddev: 0.000011180906101956026",
            "extra": "mean: 271.09371276381813 usec\nrounds: 3471"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys",
            "value": 248833.24813751815,
            "unit": "iter/sec",
            "range": "stddev: 2.5001730747654247e-7",
            "extra": "mean: 4.018755562147982 usec\nrounds: 121581"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_nested",
            "value": 6950.0214052594065,
            "unit": "iter/sec",
            "range": "stddev: 0.00002585124510480934",
            "extra": "mean: 143.88444893756056 usec\nrounds: 5689"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_nested_locked",
            "value": 6728.327418860031,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040703265439657125",
            "extra": "mean: 148.62534739271476 usec\nrounds: 6235"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_nested_leaf",
            "value": 7928.588182068367,
            "unit": "iter/sec",
            "range": "stddev: 0.000006352288906901812",
            "extra": "mean: 126.12585961541583 usec\nrounds: 6817"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_stack_nested",
            "value": 6803.049276989064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033954340098064395",
            "extra": "mean: 146.9929085156629 usec\nrounds: 5990"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_stack_nested_leaf",
            "value": 7719.773199033698,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053566768584030916",
            "extra": "mean: 129.53748435578035 usec\nrounds: 6712"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_stack_nested_locked",
            "value": 6646.166723713787,
            "unit": "iter/sec",
            "range": "stddev: 0.000009748889513252615",
            "extra": "mean: 150.4626714271191 usec\nrounds: 6090"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values",
            "value": 877181.0898152629,
            "unit": "iter/sec",
            "range": "stddev: 6.378546749523794e-8",
            "extra": "mean: 1.1400154558856188 usec\nrounds: 156691"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_nested",
            "value": 19259.84062307476,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017502138785739747",
            "extra": "mean: 51.92150961010153 usec\nrounds: 15037"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_nested_locked",
            "value": 19498.253776438716,
            "unit": "iter/sec",
            "range": "stddev: 0.000005093662188186039",
            "extra": "mean: 51.28664399723729 usec\nrounds: 17233"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_nested_leaf",
            "value": 21741.998398887034,
            "unit": "iter/sec",
            "range": "stddev: 0.00000168139862444035",
            "extra": "mean: 45.993932188459254 usec\nrounds: 18050"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_stack_nested",
            "value": 19290.884789501524,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027505719724126752",
            "extra": "mean: 51.837954086181654 usec\nrounds: 15834"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_stack_nested_leaf",
            "value": 21715.37886546403,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014839181554912933",
            "extra": "mean: 46.05031329158122 usec\nrounds: 17447"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_stack_nested_locked",
            "value": 19087.80647289207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025789818081345566",
            "extra": "mean: 52.38946661682526 usec\nrounds: 17329"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership",
            "value": 738989.0579831443,
            "unit": "iter/sec",
            "range": "stddev: 1.479813571360684e-7",
            "extra": "mean: 1.3532000091167915 usec\nrounds: 153563"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_nested",
            "value": 290315.5143706071,
            "unit": "iter/sec",
            "range": "stddev: 2.7385336758986757e-7",
            "extra": "mean: 3.4445282821621217 usec\nrounds: 102680"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_nested_leaf",
            "value": 285980.15353478416,
            "unit": "iter/sec",
            "range": "stddev: 3.5244824913007907e-7",
            "extra": "mean: 3.4967461470306844 usec\nrounds: 121271"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_stacked_nested",
            "value": 283931.1735536487,
            "unit": "iter/sec",
            "range": "stddev: 6.474569993601916e-7",
            "extra": "mean: 3.521980300662725 usec\nrounds: 82285"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_stacked_nested_leaf",
            "value": 275247.6940037115,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016711522532008918",
            "extra": "mean: 3.6330912911717834 usec\nrounds: 86416"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_nested_last",
            "value": 224562.58043684074,
            "unit": "iter/sec",
            "range": "stddev: 6.459975234223762e-7",
            "extra": "mean: 4.4531016612594305 usec\nrounds: 106068"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_nested_leaf_last",
            "value": 228742.224153572,
            "unit": "iter/sec",
            "range": "stddev: 4.847101568940025e-7",
            "extra": "mean: 4.371733306783903 usec\nrounds: 102376"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_stacked_nested_last",
            "value": 169848.0515486346,
            "unit": "iter/sec",
            "range": "stddev: 3.9123260104316226e-7",
            "extra": "mean: 5.8876153766983785 usec\nrounds: 55982"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_stacked_nested_leaf_last",
            "value": 168160.22234052263,
            "unit": "iter/sec",
            "range": "stddev: 4.2376460395206456e-7",
            "extra": "mean: 5.946709549271473 usec\nrounds: 59239"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_nested_getleaf",
            "value": 93950.74266515864,
            "unit": "iter/sec",
            "range": "stddev: 5.269829813731275e-7",
            "extra": "mean: 10.643875414205182 usec\nrounds: 68555"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_nested_get",
            "value": 98766.1324406684,
            "unit": "iter/sec",
            "range": "stddev: 7.787563847172309e-7",
            "extra": "mean: 10.124928204521202 usec\nrounds: 76133"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_stacked_getleaf",
            "value": 94205.21531454669,
            "unit": "iter/sec",
            "range": "stddev: 5.376969948633679e-7",
            "extra": "mean: 10.615123554052161 usec\nrounds: 56712"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_stacked_get",
            "value": 98760.09844198478,
            "unit": "iter/sec",
            "range": "stddev: 7.164045283916123e-7",
            "extra": "mean: 10.12554681268808 usec\nrounds: 58852"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_nested_getitemleaf",
            "value": 89429.10344524051,
            "unit": "iter/sec",
            "range": "stddev: 7.068959264199697e-7",
            "extra": "mean: 11.182042103467166 usec\nrounds: 54366"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_nested_getitem",
            "value": 97147.5547359989,
            "unit": "iter/sec",
            "range": "stddev: 7.050887971119276e-7",
            "extra": "mean: 10.293619872548794 usec\nrounds: 69653"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_stacked_getitemleaf",
            "value": 89455.84705052749,
            "unit": "iter/sec",
            "range": "stddev: 7.751920713528966e-7",
            "extra": "mean: 11.178699134503399 usec\nrounds: 53263"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_stacked_getitem",
            "value": 96782.48799236555,
            "unit": "iter/sec",
            "range": "stddev: 4.990603088211303e-7",
            "extra": "mean: 10.33244774694036 usec\nrounds: 56456"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_lock_nested",
            "value": 2946.353499661714,
            "unit": "iter/sec",
            "range": "stddev: 0.00016547746726491258",
            "extra": "mean: 339.4025869994266 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_lock_stack_nested",
            "value": 3337.0475339703953,
            "unit": "iter/sec",
            "range": "stddev: 0.000008636389606969889",
            "extra": "mean: 299.6660940008269 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unlock_nested",
            "value": 2421.5905213778647,
            "unit": "iter/sec",
            "range": "stddev: 0.00237301956316165",
            "extra": "mean: 412.95173200091995 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unlock_stack_nested",
            "value": 3229.9766119005394,
            "unit": "iter/sec",
            "range": "stddev: 0.000008528699620550336",
            "extra": "mean: 309.59976500002995 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_flatten_speed",
            "value": 3765.655643178069,
            "unit": "iter/sec",
            "range": "stddev: 0.000008252504447151726",
            "extra": "mean: 265.55800496830307 usec\nrounds: 3220"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unflatten_speed",
            "value": 2467.1587301524737,
            "unit": "iter/sec",
            "range": "stddev: 0.000010703277472584445",
            "extra": "mean: 405.3245491578885 usec\nrounds: 2309"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1406.0958837986168,
            "unit": "iter/sec",
            "range": "stddev: 0.00016457842749176908",
            "extra": "mean: 711.1890529815544 usec\nrounds: 906"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 546789.5944147083,
            "unit": "iter/sec",
            "range": "stddev: 1.589115789828516e-7",
            "extra": "mean: 1.8288570415653482 usec\nrounds: 119818"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 85688.5955180705,
            "unit": "iter/sec",
            "range": "stddev: 7.493087207694463e-7",
            "extra": "mean: 11.670164436166004 usec\nrounds: 19503"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 69965.86715316834,
            "unit": "iter/sec",
            "range": "stddev: 7.963878648008319e-7",
            "extra": "mean: 14.29268357113067 usec\nrounds: 22716"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 57321.41823009449,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011845645006865975",
            "extra": "mean: 17.445486013376183 usec\nrounds: 22629"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 75852.61134099527,
            "unit": "iter/sec",
            "range": "stddev: 0.000001988860987803845",
            "extra": "mean: 13.183461746682681 usec\nrounds: 13659"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[int]",
            "value": 89947.7789807346,
            "unit": "iter/sec",
            "range": "stddev: 8.205461872821981e-7",
            "extra": "mean: 11.117561893486933 usec\nrounds: 11956"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[slice_int]",
            "value": 44757.51671046927,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026178196389498827",
            "extra": "mean: 22.34261579946166 usec\nrounds: 11317"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[range]",
            "value": 23698.193256642986,
            "unit": "iter/sec",
            "range": "stddev: 0.000004678395979727669",
            "extra": "mean: 42.19730969236163 usec\nrounds: 5922"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[tuple]",
            "value": 55364.55754490932,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014710061180931124",
            "extra": "mean: 18.06209684216917 usec\nrounds: 19919"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[list]",
            "value": 26895.770015407437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028815782161541806",
            "extra": "mean: 37.18056777802393 usec\nrounds: 8845"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[int]",
            "value": 28841.86888630158,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034521876425666676",
            "extra": "mean: 34.67181700125366 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[slice_int]",
            "value": 16655.86617080665,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035428196547434363",
            "extra": "mean: 60.038906997988306 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[range]",
            "value": 12787.757307717295,
            "unit": "iter/sec",
            "range": "stddev: 0.000004275298548949097",
            "extra": "mean: 78.19979500209229 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[tuple]",
            "value": 19978.678355210915,
            "unit": "iter/sec",
            "range": "stddev: 0.000005391929226389383",
            "extra": "mean: 50.053360999186225 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 48095.52037370351,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027401933895370825",
            "extra": "mean: 20.791957176676174 usec\nrounds: 16323"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 50911.3811788447,
            "unit": "iter/sec",
            "range": "stddev: 0.00001199592130265027",
            "extra": "mean: 19.641973500721523 usec\nrounds: 17623"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7085.398795568852,
            "unit": "iter/sec",
            "range": "stddev: 0.00011093918681781156",
            "extra": "mean: 141.1353162824641 usec\nrounds: 4066"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 43489.05219363493,
            "unit": "iter/sec",
            "range": "stddev: 0.000001841781861832327",
            "extra": "mean: 22.99429280609524 usec\nrounds: 24979"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 32878.00084354186,
            "unit": "iter/sec",
            "range": "stddev: 0.000002034981192325125",
            "extra": "mean: 30.41547461351889 usec\nrounds: 14949"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update__nested",
            "value": 42164.445921585924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018271965813053052",
            "extra": "mean: 23.716664079013874 usec\nrounds: 12622"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 46079.60550702492,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018241799045346809",
            "extra": "mean: 21.701574677056385 usec\nrounds: 17629"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 38890.96517981459,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018088580116936668",
            "extra": "mean: 25.712912893173083 usec\nrounds: 15326"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select",
            "value": 24995.477103493486,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024874243038047193",
            "extra": "mean: 40.007237943869264 usec\nrounds: 11301"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select_nested",
            "value": 16841.695040351122,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023477171047405603",
            "extra": "mean: 59.376446230862975 usec\nrounds: 11382"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_exclude_nested",
            "value": 8484.403401324797,
            "unit": "iter/sec",
            "range": "stddev: 0.000004082973335667264",
            "extra": "mean: 117.86332552785679 usec\nrounds: 5296"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_empty[True]",
            "value": 2433.298692750117,
            "unit": "iter/sec",
            "range": "stddev: 0.00000873566934186577",
            "extra": "mean: 410.9647545447036 usec\nrounds: 2200"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_empty[False]",
            "value": 957044.8635846168,
            "unit": "iter/sec",
            "range": "stddev: 6.250394735994072e-8",
            "extra": "mean: 1.044883095923504 usec\nrounds: 180832"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unbind_speed",
            "value": 4030.99368594854,
            "unit": "iter/sec",
            "range": "stddev: 0.00001257870282298813",
            "extra": "mean: 248.07778873131338 usec\nrounds: 568"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unbind_speed_stack0",
            "value": 4160.8668523527485,
            "unit": "iter/sec",
            "range": "stddev: 0.00000788849472999541",
            "extra": "mean: 240.3345349622407 usec\nrounds: 3604"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unbind_speed_stack1",
            "value": 1474.8032357034756,
            "unit": "iter/sec",
            "range": "stddev: 0.0032340275437459536",
            "extra": "mean: 678.0565541158471 usec\nrounds: 1543"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_split",
            "value": 607.248401009668,
            "unit": "iter/sec",
            "range": "stddev: 0.004385648519131691",
            "extra": "mean: 1.6467725535996578 msec\nrounds: 625"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_chunk",
            "value": 681.1189876256593,
            "unit": "iter/sec",
            "range": "stddev: 0.000027404027976783244",
            "extra": "mean: 1.4681722550210223 msec\nrounds: 647"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 9870.480984795922,
            "unit": "iter/sec",
            "range": "stddev: 0.000006696133466382397",
            "extra": "mean: 101.31218544874949 usec\nrounds: 2653"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 12306.701413816703,
            "unit": "iter/sec",
            "range": "stddev: 0.000055238277532425205",
            "extra": "mean: 81.25654197454587 usec\nrounds: 8934"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 191187.54028709227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015756566506782552",
            "extra": "mean: 5.230466370864825 usec\nrounds: 23908"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 1580780.0668097558,
            "unit": "iter/sec",
            "range": "stddev: 1.0251447372645078e-7",
            "extra": "mean: 632.599069912455 nsec\nrounds: 69653"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 283864.5592551499,
            "unit": "iter/sec",
            "range": "stddev: 4.201515229743435e-7",
            "extra": "mean: 3.5228068013279397 usec\nrounds: 26289"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_memmaptd_index",
            "value": 4247.447592362569,
            "unit": "iter/sec",
            "range": "stddev: 0.00005513058879655451",
            "extra": "mean: 235.43551232936284 usec\nrounds: 1825"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_memmaptd_index_astensor",
            "value": 3353.5436239613514,
            "unit": "iter/sec",
            "range": "stddev: 0.00009384832752010144",
            "extra": "mean: 298.19203568873115 usec\nrounds: 2830"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_memmaptd_index_op",
            "value": 1660.3980096817209,
            "unit": "iter/sec",
            "range": "stddev: 0.00005324341895815264",
            "extra": "mean: 602.2652365089792 usec\nrounds: 1501"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_model",
            "value": 8.500422544317013,
            "unit": "iter/sec",
            "range": "stddev: 0.044707559014094504",
            "extra": "mean: 117.64121074999423 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_model_pickle",
            "value": 2.6205653491069394,
            "unit": "iter/sec",
            "range": "stddev: 0.08027807758850554",
            "extra": "mean: 381.59704749999435 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_weights",
            "value": 10.143070005683768,
            "unit": "iter/sec",
            "range": "stddev: 0.0027006006413132872",
            "extra": "mean: 98.5894802500269 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_weights_returnearly",
            "value": 7.531759295847888,
            "unit": "iter/sec",
            "range": "stddev: 0.021776386902211963",
            "extra": "mean: 132.77110442858688 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_weights_pickle",
            "value": 2.3257583098337915,
            "unit": "iter/sec",
            "range": "stddev: 0.019336431488108832",
            "extra": "mean: 429.9672910000112 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_weights_filesystem",
            "value": 10.646224235445182,
            "unit": "iter/sec",
            "range": "stddev: 0.0033849596984276724",
            "extra": "mean: 93.93001480004841 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_model_filesystem",
            "value": 10.530238257878901,
            "unit": "iter/sec",
            "range": "stddev: 0.004629284048179413",
            "extra": "mean: 94.96461290909379 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 48158.82007420268,
            "unit": "iter/sec",
            "range": "stddev: 9.467010182162442e-7",
            "extra": "mean: 20.76462833722273 usec\nrounds: 10827"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 31437.0353911754,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021986258369988332",
            "extra": "mean: 31.80961523746947 usec\nrounds: 8387"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 48469.543474865925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020390210117956134",
            "extra": "mean: 20.631512663587475 usec\nrounds: 18675"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 16481.03602505204,
            "unit": "iter/sec",
            "range": "stddev: 0.0013253469170671675",
            "extra": "mean: 60.67579723021948 usec\nrounds: 8882"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 41115.868832898865,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014923044469188329",
            "extra": "mean: 24.321509635711504 usec\nrounds: 9911"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 28124.547675460813,
            "unit": "iter/sec",
            "range": "stddev: 0.000003844863325280675",
            "extra": "mean: 35.55612739231779 usec\nrounds: 12905"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 42070.906046595504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022824131422816143",
            "extra": "mean: 23.769395384364984 usec\nrounds: 8665"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 25311.355979834887,
            "unit": "iter/sec",
            "range": "stddev: 0.000002124385104368648",
            "extra": "mean: 39.50795843560031 usec\nrounds: 11308"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 34246.5162242884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018954619768692917",
            "extra": "mean: 29.200050406609748 usec\nrounds: 9225"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 17979.913168593077,
            "unit": "iter/sec",
            "range": "stddev: 0.000004711448527703213",
            "extra": "mean: 55.61762121002777 usec\nrounds: 6959"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 9739.189200527664,
            "unit": "iter/sec",
            "range": "stddev: 0.000007024506444160723",
            "extra": "mean: 102.67795187158092 usec\nrounds: 4114"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdmodule",
            "value": 54648.67297480691,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020239432754399453",
            "extra": "mean: 18.298705998972764 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdmodule_dispatch",
            "value": 27834.34412458221,
            "unit": "iter/sec",
            "range": "stddev: 0.000002468873445390309",
            "extra": "mean: 35.92683899876192 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdseq",
            "value": 46871.3974957553,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013376647605851223",
            "extra": "mean: 21.334972999056845 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdseq_dispatch",
            "value": 24571.9649705332,
            "unit": "iter/sec",
            "range": "stddev: 0.000001808040249988791",
            "extra": "mean: 40.69678599978488 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 768.5243087536101,
            "unit": "iter/sec",
            "range": "stddev: 0.00005098581219389662",
            "extra": "mean: 1.3011950157071759 msec\nrounds: 573"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 994.1409224852542,
            "unit": "iter/sec",
            "range": "stddev: 0.0001295973032469278",
            "extra": "mean: 1.0058936086245183 msec\nrounds: 626"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 6362.696645843549,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071065747484668746",
            "extra": "mean: 157.16606584619322 usec\nrounds: 2764"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functional_call",
            "value": 6750.277255653296,
            "unit": "iter/sec",
            "range": "stddev: 0.000007025661633605771",
            "extra": "mean: 148.142063225997 usec\nrounds: 4049"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 7053.245959992662,
            "unit": "iter/sec",
            "range": "stddev: 0.000007524739766872283",
            "extra": "mean: 141.77869390521585 usec\nrounds: 2166"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td_decorator",
            "value": 5194.014014459317,
            "unit": "iter/sec",
            "range": "stddev: 0.000016125871963271927",
            "extra": "mean: 192.5293226425954 usec\nrounds: 3118"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed[True-True]",
            "value": 2126.200347978059,
            "unit": "iter/sec",
            "range": "stddev: 0.00002301070471028614",
            "extra": "mean: 470.32256435804106 usec\nrounds: 1919"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed[True-False]",
            "value": 2146.134128851943,
            "unit": "iter/sec",
            "range": "stddev: 0.000014251432988247034",
            "extra": "mean: 465.9541016362019 usec\nrounds: 2017"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed[False-True]",
            "value": 2631.610263192497,
            "unit": "iter/sec",
            "range": "stddev: 0.000018001238961737482",
            "extra": "mean: 379.99547804881473 usec\nrounds: 2460"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed[False-False]",
            "value": 2623.2811091371973,
            "unit": "iter/sec",
            "range": "stddev: 0.000016802848224918573",
            "extra": "mean: 381.2019979547301 usec\nrounds: 2445"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed_decorator[True-True]",
            "value": 2041.8323295270436,
            "unit": "iter/sec",
            "range": "stddev: 0.000028714093138263076",
            "extra": "mean: 489.7561790647292 usec\nrounds: 1882"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed_decorator[True-False]",
            "value": 2032.7548310483876,
            "unit": "iter/sec",
            "range": "stddev: 0.000023519806053811503",
            "extra": "mean: 491.94324112576464 usec\nrounds: 1916"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed_decorator[False-True]",
            "value": 2518.790348005572,
            "unit": "iter/sec",
            "range": "stddev: 0.000016347122092154117",
            "extra": "mean: 397.01597268380027 usec\nrounds: 1684"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed_decorator[False-False]",
            "value": 2506.018383825197,
            "unit": "iter/sec",
            "range": "stddev: 0.000019251664605462592",
            "extra": "mean: 399.03937116119465 usec\nrounds: 2344"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_to_module_speed[True]",
            "value": 731.0948069464583,
            "unit": "iter/sec",
            "range": "stddev: 0.00001777557528520681",
            "extra": "mean: 1.3678116579389614 msec\nrounds: 611"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_to_module_speed[False]",
            "value": 742.2214105506185,
            "unit": "iter/sec",
            "range": "stddev: 0.000015640828691152706",
            "extra": "mean: 1.3473068625952838 msec\nrounds: 655"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2290321870@qq.com",
            "name": "zhangruize",
            "username": "zrz-sh"
          },
          "committer": {
            "email": "2290321870@qq.com",
            "name": "zhangruize",
            "username": "zrz-sh"
          },
          "distinct": true,
          "id": "a8c5397a81cf37b9b985d8a85180ab52f60af54a",
          "message": "fix pytorch version requirement",
          "timestamp": "2024-04-07T17:03:18+08:00",
          "tree_id": "33fe789d3d69c61bf04e0f548c3138bc2b73c558",
          "url": "https://github.com/zrz-sh/tensordict/commit/a8c5397a81cf37b9b985d8a85180ab52f60af54a"
        },
        "date": 1712480873631,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_plain_set_nested",
            "value": 61132.11358163648,
            "unit": "iter/sec",
            "range": "stddev: 7.539606719317426e-7",
            "extra": "mean: 16.358014493717597 usec\nrounds: 9108"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_plain_set_stack_nested",
            "value": 59543.60220967374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010617718448633776",
            "extra": "mean: 16.794415569260526 usec\nrounds: 18228"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_plain_set_nested_inplace",
            "value": 53019.846276075106,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010971829448661588",
            "extra": "mean: 18.860861926927996 usec\nrounds: 31143"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_plain_set_stack_nested_inplace",
            "value": 52532.62853948083,
            "unit": "iter/sec",
            "range": "stddev: 9.567383176870312e-7",
            "extra": "mean: 19.03578838147136 usec\nrounds: 34066"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items",
            "value": 381071.81968756224,
            "unit": "iter/sec",
            "range": "stddev: 2.6251610111224265e-7",
            "extra": "mean: 2.624177250419336 usec\nrounds: 105619"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_nested",
            "value": 3655.9302691593743,
            "unit": "iter/sec",
            "range": "stddev: 0.00001004819960881625",
            "extra": "mean: 273.5281929296575 usec\nrounds: 2970"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_nested_locked",
            "value": 3674.3738177379737,
            "unit": "iter/sec",
            "range": "stddev: 0.000015477174497320135",
            "extra": "mean: 272.15521599150253 usec\nrounds: 3602"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_nested_leaf",
            "value": 5904.3781555712285,
            "unit": "iter/sec",
            "range": "stddev: 0.000008679351362940778",
            "extra": "mean: 169.365845759121 usec\nrounds: 5258"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_stack_nested",
            "value": 3638.551567362391,
            "unit": "iter/sec",
            "range": "stddev: 0.000006315770373885302",
            "extra": "mean: 274.83463721386977 usec\nrounds: 3418"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_stack_nested_leaf",
            "value": 5859.40851473818,
            "unit": "iter/sec",
            "range": "stddev: 0.00001008309394471911",
            "extra": "mean: 170.66569048474744 usec\nrounds: 5192"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_items_stack_nested_locked",
            "value": 3592.3694148263053,
            "unit": "iter/sec",
            "range": "stddev: 0.000007197109623629784",
            "extra": "mean: 278.3678081304317 usec\nrounds: 3591"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys",
            "value": 258267.29802006143,
            "unit": "iter/sec",
            "range": "stddev: 2.364048983397359e-7",
            "extra": "mean: 3.8719574939074284 usec\nrounds: 117842"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_nested",
            "value": 6829.353117110795,
            "unit": "iter/sec",
            "range": "stddev: 0.00002531451180484253",
            "extra": "mean: 146.42675270290562 usec\nrounds: 5827"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_nested_locked",
            "value": 6609.194280981178,
            "unit": "iter/sec",
            "range": "stddev: 0.000005225265384074864",
            "extra": "mean: 151.30437349642315 usec\nrounds: 6233"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_nested_leaf",
            "value": 7796.556487786066,
            "unit": "iter/sec",
            "range": "stddev: 0.000006693049438847231",
            "extra": "mean: 128.26175268101764 usec\nrounds: 6623"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_stack_nested",
            "value": 6746.255315195517,
            "unit": "iter/sec",
            "range": "stddev: 0.000003936458162958706",
            "extra": "mean: 148.2303816381753 usec\nrounds: 6045"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_stack_nested_leaf",
            "value": 7838.317143640072,
            "unit": "iter/sec",
            "range": "stddev: 0.000003380846873615493",
            "extra": "mean: 127.57840511867902 usec\nrounds: 6798"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_keys_stack_nested_locked",
            "value": 6578.919487972642,
            "unit": "iter/sec",
            "range": "stddev: 0.00000473990166229039",
            "extra": "mean: 152.0006441526099 usec\nrounds: 6233"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values",
            "value": 881100.9979202366,
            "unit": "iter/sec",
            "range": "stddev: 6.277875204280217e-8",
            "extra": "mean: 1.1349436697500188 usec\nrounds: 163106"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_nested",
            "value": 19130.673816813225,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016823463489489701",
            "extra": "mean: 52.27207413474051 usec\nrounds: 15067"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_nested_locked",
            "value": 19021.62159644189,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017071645412327987",
            "extra": "mean: 52.57175340860824 usec\nrounds: 17239"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_nested_leaf",
            "value": 20943.221366928876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019773362777536076",
            "extra": "mean: 47.74814640402383 usec\nrounds: 17923"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_stack_nested",
            "value": 18853.52331434121,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017625200066274547",
            "extra": "mean: 53.04048390994033 usec\nrounds: 15662"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_stack_nested_leaf",
            "value": 20994.168405192744,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016209001579826828",
            "extra": "mean: 47.632274863178566 usec\nrounds: 17496"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_values_stack_nested_locked",
            "value": 18720.3888671668,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017798938066665896",
            "extra": "mean: 53.417693782733004 usec\nrounds: 17210"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership",
            "value": 727953.2250012715,
            "unit": "iter/sec",
            "range": "stddev: 1.435175234776735e-7",
            "extra": "mean: 1.3737146366763515 usec\nrounds: 157431"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_nested",
            "value": 285301.8376691364,
            "unit": "iter/sec",
            "range": "stddev: 2.882574748084469e-7",
            "extra": "mean: 3.5050597927087197 usec\nrounds: 115248"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_nested_leaf",
            "value": 286505.3584182435,
            "unit": "iter/sec",
            "range": "stddev: 2.7696585616825433e-7",
            "extra": "mean: 3.490336116297656 usec\nrounds: 129116"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_stacked_nested",
            "value": 290966.27657393226,
            "unit": "iter/sec",
            "range": "stddev: 2.938420338551748e-7",
            "extra": "mean: 3.436824403758378 usec\nrounds: 51664"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_stacked_nested_leaf",
            "value": 284996.4275363753,
            "unit": "iter/sec",
            "range": "stddev: 2.592536218704897e-7",
            "extra": "mean: 3.5088159126919782 usec\nrounds: 82488"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_nested_last",
            "value": 231539.60836540587,
            "unit": "iter/sec",
            "range": "stddev: 3.549270085424589e-7",
            "extra": "mean: 4.318915485171949 usec\nrounds: 106644"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_nested_leaf_last",
            "value": 229489.69126781763,
            "unit": "iter/sec",
            "range": "stddev: 2.6895663838199976e-7",
            "extra": "mean: 4.357494205842066 usec\nrounds: 112791"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_stacked_nested_last",
            "value": 231388.6634456979,
            "unit": "iter/sec",
            "range": "stddev: 3.051591821373844e-7",
            "extra": "mean: 4.321732902159571 usec\nrounds: 70592"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_membership_stacked_nested_leaf_last",
            "value": 227535.04181324784,
            "unit": "iter/sec",
            "range": "stddev: 7.215714442179444e-7",
            "extra": "mean: 4.394927445157051 usec\nrounds: 75047"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_nested_getleaf",
            "value": 92274.74489619695,
            "unit": "iter/sec",
            "range": "stddev: 6.013837035098848e-7",
            "extra": "mean: 10.837201458805815 usec\nrounds: 68550"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_nested_get",
            "value": 97199.13409862544,
            "unit": "iter/sec",
            "range": "stddev: 6.885572928320446e-7",
            "extra": "mean: 10.288157495161695 usec\nrounds: 75393"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_stacked_getleaf",
            "value": 93291.65586258301,
            "unit": "iter/sec",
            "range": "stddev: 5.132452969071323e-7",
            "extra": "mean: 10.719072255218437 usec\nrounds: 55733"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_stacked_get",
            "value": 96625.28268005961,
            "unit": "iter/sec",
            "range": "stddev: 4.977231521515596e-7",
            "extra": "mean: 10.349258209273714 usec\nrounds: 56520"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_nested_getitemleaf",
            "value": 88179.89365931858,
            "unit": "iter/sec",
            "range": "stddev: 9.83608142624957e-7",
            "extra": "mean: 11.340453685093815 usec\nrounds: 49757"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_nested_getitem",
            "value": 96497.53873711849,
            "unit": "iter/sec",
            "range": "stddev: 7.092626331132177e-7",
            "extra": "mean: 10.362958611040124 usec\nrounds: 70792"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_stacked_getitemleaf",
            "value": 89723.922110778,
            "unit": "iter/sec",
            "range": "stddev: 0.000001026698302765788",
            "extra": "mean: 11.145299675657803 usec\nrounds: 53034"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_stacked_getitem",
            "value": 97473.17176888649,
            "unit": "iter/sec",
            "range": "stddev: 6.657589658336752e-7",
            "extra": "mean: 10.259233200813938 usec\nrounds: 56938"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_lock_nested",
            "value": 2946.054660526198,
            "unit": "iter/sec",
            "range": "stddev: 0.00018127128273796707",
            "extra": "mean: 339.4370150014083 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_lock_stack_nested",
            "value": 3315.653209393793,
            "unit": "iter/sec",
            "range": "stddev: 0.000012367196179293385",
            "extra": "mean: 301.59969600163095 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unlock_nested",
            "value": 2319.587645607816,
            "unit": "iter/sec",
            "range": "stddev: 0.0028504439663597854",
            "extra": "mean: 431.1111079995271 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unlock_stack_nested",
            "value": 3212.2566763074456,
            "unit": "iter/sec",
            "range": "stddev: 0.00001163769909226744",
            "extra": "mean: 311.30762599877926 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_flatten_speed",
            "value": 3722.0860939073436,
            "unit": "iter/sec",
            "range": "stddev: 0.000014959326565169824",
            "extra": "mean: 268.66654203321434 usec\nrounds: 3188"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unflatten_speed",
            "value": 2452.533203962943,
            "unit": "iter/sec",
            "range": "stddev: 0.000018731269158421284",
            "extra": "mean: 407.74167639571317 usec\nrounds: 2330"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1459.4659920906863,
            "unit": "iter/sec",
            "range": "stddev: 0.0001385238230221026",
            "extra": "mean: 685.1821182674487 usec\nrounds: 947"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 540187.9924946539,
            "unit": "iter/sec",
            "range": "stddev: 2.7792740919784294e-7",
            "extra": "mean: 1.8512073831591078 usec\nrounds: 109927"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 104340.0727273232,
            "unit": "iter/sec",
            "range": "stddev: 5.612591477439773e-7",
            "extra": "mean: 9.58404545694871 usec\nrounds: 20899"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 81743.24547076857,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011018607092347843",
            "extra": "mean: 12.233426679365214 usec\nrounds: 21822"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 64556.533192774325,
            "unit": "iter/sec",
            "range": "stddev: 0.000001277810136126109",
            "extra": "mean: 15.490298975842896 usec\nrounds: 22537"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 77180.71369205852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017169483268222371",
            "extra": "mean: 12.956604728868875 usec\nrounds: 14294"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[int]",
            "value": 89311.77315910989,
            "unit": "iter/sec",
            "range": "stddev: 8.323274374619034e-7",
            "extra": "mean: 11.19673212868016 usec\nrounds: 11233"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[slice_int]",
            "value": 44874.46540690589,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015878959493306896",
            "extra": "mean: 22.2843880352078 usec\nrounds: 10798"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[range]",
            "value": 24119.88909745734,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037620778292111394",
            "extra": "mean: 41.45956044654523 usec\nrounds: 4930"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[tuple]",
            "value": 54044.58469036956,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011562522145822195",
            "extra": "mean: 18.50324145757002 usec\nrounds: 15746"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_getitem[list]",
            "value": 27315.556281833142,
            "unit": "iter/sec",
            "range": "stddev: 0.000003073424870411026",
            "extra": "mean: 36.60917572691257 usec\nrounds: 8223"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[int]",
            "value": 30267.728038639747,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031174205732290466",
            "extra": "mean: 33.038489004638905 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[slice_int]",
            "value": 16558.43247302198,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035085170334740778",
            "extra": "mean: 60.392189999220136 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[range]",
            "value": 12388.500552588761,
            "unit": "iter/sec",
            "range": "stddev: 0.000007316871563675965",
            "extra": "mean: 80.72001900109171 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem_dim[tuple]",
            "value": 20268.668908296888,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027721143838358588",
            "extra": "mean: 49.33723100043608 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 52796.44426345486,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019228186389005228",
            "extra": "mean: 18.940669470276987 usec\nrounds: 18195"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 54432.69198776762,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019011844323101663",
            "extra": "mean: 18.37131259693577 usec\nrounds: 19434"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7085.04168980675,
            "unit": "iter/sec",
            "range": "stddev: 0.00010310440544487965",
            "extra": "mean: 141.14242989405415 usec\nrounds: 3780"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 48195.368188282395,
            "unit": "iter/sec",
            "range": "stddev: 0.000002931404589776002",
            "extra": "mean: 20.748881844689947 usec\nrounds: 23977"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 35241.8950604459,
            "unit": "iter/sec",
            "range": "stddev: 0.000002819108428691877",
            "extra": "mean: 28.375318588425174 usec\nrounds: 19012"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update__nested",
            "value": 41899.62449847698,
            "unit": "iter/sec",
            "range": "stddev: 0.000003697846195099349",
            "extra": "mean: 23.8665623372436 usec\nrounds: 12288"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 49278.407813696416,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025331898049591268",
            "extra": "mean: 20.29286343383157 usec\nrounds: 17552"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 41913.40465444265,
            "unit": "iter/sec",
            "range": "stddev: 0.00000219006422019153",
            "extra": "mean: 23.858715564735306 usec\nrounds: 14636"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select",
            "value": 26102.571219808386,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036480051411787057",
            "extra": "mean: 38.31040212778474 usec\nrounds: 11091"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_select_nested",
            "value": 16751.086245500257,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022890573128111323",
            "extra": "mean: 59.697621118070714 usec\nrounds: 12331"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_exclude_nested",
            "value": 8376.421655412012,
            "unit": "iter/sec",
            "range": "stddev: 0.000007922811432451404",
            "extra": "mean: 119.38271986987418 usec\nrounds: 5833"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_empty[True]",
            "value": 2442.015210708269,
            "unit": "iter/sec",
            "range": "stddev: 0.000009644922859905265",
            "extra": "mean: 409.49785882372345 usec\nrounds: 2125"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_empty[False]",
            "value": 943936.1121341398,
            "unit": "iter/sec",
            "range": "stddev: 7.922942681648404e-8",
            "extra": "mean: 1.0593937313608301 usec\nrounds: 178572"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unbind_speed",
            "value": 4074.010715518432,
            "unit": "iter/sec",
            "range": "stddev: 0.000016338150189050292",
            "extra": "mean: 245.4583627359818 usec\nrounds: 2823"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unbind_speed_stack0",
            "value": 4146.494708313409,
            "unit": "iter/sec",
            "range": "stddev: 0.000009918701470511728",
            "extra": "mean: 241.1675572610946 usec\nrounds: 3580"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_unbind_speed_stack1",
            "value": 1427.7415716044827,
            "unit": "iter/sec",
            "range": "stddev: 0.00333491600580085",
            "extra": "mean: 700.4068662623653 usec\nrounds: 1488"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_split",
            "value": 599.0266841642352,
            "unit": "iter/sec",
            "range": "stddev: 0.00496250659845869",
            "extra": "mean: 1.6693747147428075 msec\nrounds: 624"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_chunk",
            "value": 676.8300035278453,
            "unit": "iter/sec",
            "range": "stddev: 0.00007162229283725407",
            "extra": "mean: 1.4774758725051989 msec\nrounds: 651"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation[device0]",
            "value": 9770.581371773309,
            "unit": "iter/sec",
            "range": "stddev: 0.000009099214080420895",
            "extra": "mean: 102.34805503886872 usec\nrounds: 2580"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_creation_from_tensor",
            "value": 12074.361853425251,
            "unit": "iter/sec",
            "range": "stddev: 0.00006261511027607805",
            "extra": "mean: 82.82011191476097 usec\nrounds: 8435"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_add_one[memmap_tensor0]",
            "value": 180925.2748665041,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025076391532165664",
            "extra": "mean: 5.527143737865542 usec\nrounds: 22068"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_contiguous[memmap_tensor0]",
            "value": 1472624.6519100398,
            "unit": "iter/sec",
            "range": "stddev: 1.366605192149651e-7",
            "extra": "mean: 679.0596631008241 nsec\nrounds: 74267"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_stack[memmap_tensor0]",
            "value": 273142.0258220263,
            "unit": "iter/sec",
            "range": "stddev: 6.052537506013255e-7",
            "extra": "mean: 3.661099008804962 usec\nrounds: 21685"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_memmaptd_index",
            "value": 4133.192236860586,
            "unit": "iter/sec",
            "range": "stddev: 0.00005539953929421239",
            "extra": "mean: 241.94374292146685 usec\nrounds: 1801"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_memmaptd_index_astensor",
            "value": 3255.574311229449,
            "unit": "iter/sec",
            "range": "stddev: 0.0000538271356255802",
            "extra": "mean: 307.165465875161 usec\nrounds: 2784"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_memmaptd_index_op",
            "value": 1704.2246284071896,
            "unit": "iter/sec",
            "range": "stddev: 0.00005482721738067111",
            "extra": "mean: 586.777108681163 usec\nrounds: 1509"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_model",
            "value": 9.424171553289716,
            "unit": "iter/sec",
            "range": "stddev: 0.0019330793787238113",
            "extra": "mean: 106.11012271428015 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_model_pickle",
            "value": 2.634392856767012,
            "unit": "iter/sec",
            "range": "stddev: 0.08203872052772322",
            "extra": "mean: 379.59410549997585 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_weights",
            "value": 9.694528861374385,
            "unit": "iter/sec",
            "range": "stddev: 0.00357503684122186",
            "extra": "mean: 103.15096424997705 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_weights_returnearly",
            "value": 7.796029886259259,
            "unit": "iter/sec",
            "range": "stddev: 0.00823626284587107",
            "extra": "mean: 128.2704164285633 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_weights_pickle",
            "value": 1.5657253002361535,
            "unit": "iter/sec",
            "range": "stddev: 0.27820509691304246",
            "extra": "mean: 638.6816383749903 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_weights_filesystem",
            "value": 9.33132731196017,
            "unit": "iter/sec",
            "range": "stddev: 0.04118321010407012",
            "extra": "mean: 107.16589039999462 msec\nrounds: 10"
          },
          {
            "name": "benchmarks/common/memmap_benchmarks_test.py::test_serialize_model_filesystem",
            "value": 10.270327972859878,
            "unit": "iter/sec",
            "range": "stddev: 0.0032616823578702735",
            "extra": "mean: 97.36787399999064 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 47351.784618505786,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010612502307891423",
            "extra": "mean: 21.11852822563281 usec\nrounds: 10310"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 31388.76822434074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014840207646504824",
            "extra": "mean: 31.85852954957754 usec\nrounds: 8105"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 47677.451521958625,
            "unit": "iter/sec",
            "range": "stddev: 9.279197543159943e-7",
            "extra": "mean: 20.974275429537876 usec\nrounds: 14599"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 15611.033657293689,
            "unit": "iter/sec",
            "range": "stddev: 0.0015893398448621299",
            "extra": "mean: 64.05725731894674 usec\nrounds: 8266"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 41127.35224138882,
            "unit": "iter/sec",
            "range": "stddev: 0.000001611367438718807",
            "extra": "mean: 24.314718684798837 usec\nrounds: 6203"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 28167.37306732437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018674255831859405",
            "extra": "mean: 35.50206821239047 usec\nrounds: 13238"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 42267.53476148973,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013682267885557687",
            "extra": "mean: 23.658820076516683 usec\nrounds: 8637"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 24945.137727808953,
            "unit": "iter/sec",
            "range": "stddev: 0.000005891667830335545",
            "extra": "mean: 40.08797269077394 usec\nrounds: 10070"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 33784.81355278751,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019353505575988373",
            "extra": "mean: 29.599097785090247 usec\nrounds: 8805"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 19178.286276510073,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029897877167588814",
            "extra": "mean: 52.14230226737302 usec\nrounds: 8337"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 9767.378863369035,
            "unit": "iter/sec",
            "range": "stddev: 0.000010545897617279289",
            "extra": "mean: 102.38161271191571 usec\nrounds: 3540"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdmodule",
            "value": 58331.59504442936,
            "unit": "iter/sec",
            "range": "stddev: 0.000003409702344736104",
            "extra": "mean: 17.143368002166426 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdmodule_dispatch",
            "value": 30351.681289035212,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035683302354661755",
            "extra": "mean: 32.94710399984524 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdseq",
            "value": 51458.180759340226,
            "unit": "iter/sec",
            "range": "stddev: 0.000001061258958526255",
            "extra": "mean: 19.433256000183974 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_tdseq_dispatch",
            "value": 26500.970585311214,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022002235301242667",
            "extra": "mean: 37.73446699926808 usec\nrounds: 1000"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 748.1609890599984,
            "unit": "iter/sec",
            "range": "stddev: 0.00003247787536862631",
            "extra": "mean: 1.3366107223211627 msec\nrounds: 569"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 971.9420259759394,
            "unit": "iter/sec",
            "range": "stddev: 0.00019965727131755108",
            "extra": "mean: 1.0288679502215035 msec\nrounds: 904"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 6355.637215775091,
            "unit": "iter/sec",
            "range": "stddev: 0.000009844410831080077",
            "extra": "mean: 157.34063573011014 usec\nrounds: 2726"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functional_call",
            "value": 6903.987453941316,
            "unit": "iter/sec",
            "range": "stddev: 0.000011989487904112958",
            "extra": "mean: 144.84383215805596 usec\nrounds: 3968"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 7129.643160970339,
            "unit": "iter/sec",
            "range": "stddev: 0.000007895266542830377",
            "extra": "mean: 140.2594740609572 usec\nrounds: 2101"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td_decorator",
            "value": 5201.19135073644,
            "unit": "iter/sec",
            "range": "stddev: 0.00001072247335576549",
            "extra": "mean: 192.263643570508 usec\nrounds: 1602"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed[True-True]",
            "value": 2129.788950396499,
            "unit": "iter/sec",
            "range": "stddev: 0.00001587134500019671",
            "extra": "mean: 469.53009114533717 usec\nrounds: 1931"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed[True-False]",
            "value": 2138.9459048554254,
            "unit": "iter/sec",
            "range": "stddev: 0.000019081117115913273",
            "extra": "mean: 467.5200049379423 usec\nrounds: 2025"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed[False-True]",
            "value": 2587.2809007390474,
            "unit": "iter/sec",
            "range": "stddev: 0.000023213538698445826",
            "extra": "mean: 386.5061577636791 usec\nrounds: 2434"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed[False-False]",
            "value": 2590.8989400942028,
            "unit": "iter/sec",
            "range": "stddev: 0.000016644740531385204",
            "extra": "mean: 385.9664244424913 usec\nrounds: 2422"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed_decorator[True-True]",
            "value": 2025.535267629279,
            "unit": "iter/sec",
            "range": "stddev: 0.000024542654384346298",
            "extra": "mean: 493.6966618065442 usec\nrounds: 1783"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed_decorator[True-False]",
            "value": 2019.8610040953415,
            "unit": "iter/sec",
            "range": "stddev: 0.000029270238594564745",
            "extra": "mean: 495.08357157866993 usec\nrounds: 1893"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed_decorator[False-True]",
            "value": 2472.4663516434857,
            "unit": "iter/sec",
            "range": "stddev: 0.00002002713270450386",
            "extra": "mean: 404.45444255906045 usec\nrounds: 2298"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_vmap_mlp_speed_decorator[False-False]",
            "value": 2482.252074965448,
            "unit": "iter/sec",
            "range": "stddev: 0.00001703530841570106",
            "extra": "mean: 402.859971428937 usec\nrounds: 2310"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_to_module_speed[True]",
            "value": 696.8370417684955,
            "unit": "iter/sec",
            "range": "stddev: 0.00009380533960618082",
            "extra": "mean: 1.4350557448296812 msec\nrounds: 580"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_to_module_speed[False]",
            "value": 710.8439556485545,
            "unit": "iter/sec",
            "range": "stddev: 0.00008347812844900801",
            "extra": "mean: 1.4067785089170906 msec\nrounds: 617"
          }
        ]
      }
    ]
  }
}